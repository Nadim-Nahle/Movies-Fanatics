import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import '../register/register.css';
import axios from 'axios';

const LOGIN_URL ='/api/v1/auth/login';

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        setErrMsg('');
    }, [ email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response =await axios.post(LOGIN_URL, ({email, password})); 
            //console.log(response?.data.secret_token);
            const jwt = (response?.data.secret_token);
            localStorage.setItem('token', jwt);
            //console.log(jwt)

            navigate(from, { replace: true });
            setEmail('');
            setPassword('');

        } catch (err){
            if(!err?.response){
                setErrMsg('No server response');
            }
            else if (err.response?.status === 422){
                setErrMsg('missing email or pssword')
            }
            else if (err.response?.status === 401){
                setErrMsg('Incorrect email or password')
            }
            else{
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }

        
    }

  return (
    <div className='register-container'>
        <form className='register-form' onSubmit={handleSubmit}>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="name">
                <label className='label-name'>email<h4>*</h4></label>
                <input className='register-input' type="text" ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} />
            </div>
            <div className="name">
                <label className='label-name'>password<h4>*</h4></label>
                <input className='register-input' type="text" onChange={(e) => setPassword(e.target.value)}  value={password} />
            </div>
            <div className="btn">
                <button className='register-btn'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
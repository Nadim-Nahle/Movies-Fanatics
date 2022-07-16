import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import './login.css';
import axios from 'axios';
import useAuth from "../../hooks/useAuth";
import { useCookies } from 'react-cookie';
const LOGIN_URL ='/api/v1/auth/login';

const Login = () => {

    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');


    

    useEffect(() => {
        userRef.current.focus();
    }, [])

    
    useEffect(() => {
        setErrMsg('');
    }, [email, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response =await axios.post(LOGIN_URL, ({email, password})); 
            const accessToken = response?.data?.secret_token;
            const user = response?.data?.user;

            console.log(response.data.user._id)

            setCookie('user', user);
            setCookie('Email', response.data.user.email);
            setCookie('userId', response.data.user._id);
            setCookie('AuthToken', accessToken);

            setAuth({user})
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
    <form onSubmit={handleSubmit}>
    <div className='body'>
    
        <div className="login">
        <p ref={errRef} className="login__title1" aria-live="assertive">{errMsg}</p>
            <h1 className="login__title">Sign In</h1>
           
            <div className="login__group">
                <input className="login__group__input" type="text" placeholder='Email' ref={userRef} onChange={(e) => setEmail(e.target.value)} value={email} />
                
            </div>
            <div className="login__group">
                <input className="login__group__input" placeholder='Password' type="text" onChange={(e) => setPassword(e.target.value)}  value={password}/>
                
            </div>
            <button className="login__sign-in" type="submit">Sign In</button>
           
        </div>
    </div>
    </form> 
  )
}

export default Login
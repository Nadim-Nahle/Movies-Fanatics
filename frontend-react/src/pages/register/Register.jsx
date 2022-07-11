import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './register.css';
import { Navigate } from 'react-router-dom';

const REGISTER_URL ='/api/v1/auth/register';

const Register = () => {


    const userRef = useRef();
    const errRef = useRef();

    const [name, setName] = useState('');
    const [username, setUserame] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try{
            const response =await axios.post(REGISTER_URL, ({name, username, email, password})); 
            console.log(response?.data);
            
            
            setName('');
            setEmail('');
            setPassword('');
            Navigate("/login");
            

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
                setErrMsg('signup Failed');
            }
            errRef.current.focus();
        }
   
    }
    


  return (
    <div className='register-container'>
        <form className='register-form' onSubmit={handleSubmit}>
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <div className="name">
                <label className='label-name'>name<h4>*</h4></label>
                <input className='register-input' type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </div>
            <div className="name">
                <label className='label-name'>username<h4>*</h4></label>
                <input className='register-input' type="text" onChange={(e) => setUserame(e.target.value)} value={username} />
            </div>
            <div className="name">
                <label className='label-name'>email<h4>*</h4></label>
                <input className='register-input' type="text" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div className="name">
                <label className='label-name'>password<h4>*</h4></label>
                <input className='register-input' type="text" onChange={(e) => setPassword(e.target.value)}  value={password}/>
            </div>
            <div className="btn">
                <button className='register-btn'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Register
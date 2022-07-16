import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './payment.css';


const Payment = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const { auth } = useAuth();
  const AuthToken = localStorage.getItem('AuthToken')
  const handlePremium = async () => {
        
      
      try{
        const response = await axios.get('/api/v1/auth/user/premium',
        {
        headers: {'Authorization': 'Bearer '+AuthToken} 
        })
          const user = response.data.user
          

            console.log(response.data.user._id)

            setCookie('user', user);
            setCookie('Email', response.data.user.email);
            setCookie('userId', response.data.user._id);
            setAuth({user})
            console.log(auth)          
            navigate('/chatbot')
      }catch(err){
        console.log(AuthToken)
        console.log(err);
        
      }

    }
    
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
  return (
    
    <div className='payment'>
        <Cards number={number} name={name} xpiry={expiry} cvc={cvc} focus={focus} />
        <form action="" className='form-payment'>
            <input className='payment-input' type="tel" placeholder='Card Number' value={number} onChange={(e) => setNumber(e.target.value)} onFocus={(e) => setFocus(e.target.name)}/>
            <input className='payment-input' type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} onFocus={(e) => setFocus(e.target.name)}/>
            <input className='payment-input' type="text" placeholder='MM/YY Expiry' value={expiry} onChange={(e) => setExpiry(e.target.value)} onFocus={(e) => setFocus(e.target.name)}/>
            <input className='payment-input' type="tel" placeholder='cvc' value={cvc} onChange={(e) => setCvc(e.target.value)} onFocus={(e) => setFocus(e.target.name)}/>
            
        </form>
        <div className="payment-container">
        <button className="payment-btn" onClick={handlePremium}>Submit</button>
        </div>
        
    </div>
  )
}

export default Payment;
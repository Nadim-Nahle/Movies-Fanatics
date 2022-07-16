import axios from 'axios';
import React, { useState } from 'react'
import { useCookies } from 'react-cookie';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './payment.css';

const Payment = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const AuthToken = cookies.AuthToken;
  const Bearer = localStorage.getItem('Bearer')
    const handlePremium = async () => {
        
      
      try{
        const response = await axios.get('/api/v1/auth/user/premium',
        {
        headers: {'Authorization': 'Bearer '+Bearer} 
        })
        console.log(response.data)
        window.close();
      }catch(err){
        console.log(Bearer)
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
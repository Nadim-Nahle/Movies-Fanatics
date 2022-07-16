import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './payment.css';

const Payment = () => {
    
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');
    const [focus, setFocus] = useState('');
  return (
    
    <div className='payment'>
        <Cards number={number} name={name} xpiry={expiry} cvc={cvc} focus={focus} />
        <form action="" className='form-payment'>
            <input type="tel" placeholder='Card Number' value={number} onChange={(e) => setNumber(e.target.value)} onFocus={(e) => setFocus(e.target.name)}/>
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} onFocus={(e) => setFocus(e.target.name)}/>
            <input type="text" placeholder='MM/YY Expiry' value={expiry} onChange={(e) => setExpiry(e.target.value)} onFocus={(e) => setFocus(e.target.name)}/>
            <input type="tel" placeholder='cvc' value={cvc} onChange={(e) => setCvc(e.target.value)} onFocus={(e) => setFocus(e.target.name)}/>
            
        </form>
        <div className="payment-container">
        <button className="payment-btn">Submit</button>
        </div>
        
    </div>
  )
}

export default Payment;
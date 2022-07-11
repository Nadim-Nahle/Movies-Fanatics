import React from 'react';
import './register.css';

const Register = () => {
  return (
    <div className='register-container'>
        <form className='register-form' action="">
            <div className="name">
                <label className='label-name'>name<h4>*</h4></label>
                <input className='register-input' type="text" />
            </div>
            <div className="name">
                <label className='label-name'>username<h4>*</h4></label>
                <input className='register-input' type="text" />
            </div>
            <div className="name">
                <label className='label-name'>email<h4>*</h4></label>
                <input className='register-input' type="text" />
            </div>
            <div className="name">
                <label className='label-name'>password<h4>*</h4></label>
                <input className='register-input' type="text" />
            </div>
            <div className="btn">
                <button className='register-btn'>Sign up</button>
            </div>
        </form>
    </div>
  )
}

export default Register
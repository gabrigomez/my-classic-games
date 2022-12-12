import React from 'react';
import './SignUp.css';

export const SignUp = () => {
  return (
    <div className='signup-form-container'>
      <div className='form'>        
        <h1>
          Sign Up
        </h1>
        <div className='name'>
          <input className='sign-up-input' type="text" name='name' placeholder='Your name' />
        </div>
        <div className='email'>
          <input className='sign-up-input' type="text" name='email' placeholder='E-mail' />
        </div>
        <div className='password'>
          <input className='sign-up-input' type="password" name='password' placeholder='Password' />
        </div>
        <div className='passwordConfirmation'>
          <input className='sign-up-input' type="password" name='passwordConfirmation' placeholder='Confirm Password' />
        </div>         
        <button> 
          Register
        </button>        
      </div>
    </div>
  )
}
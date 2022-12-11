import React from 'react';
import './Login.css'

export const Login = () => {
  return (
    <div className='login-form-container'>
      <div className='form'>        
        <h1>
          Login
        </h1>
        <div className='email'>
          <input type="text" name='email' placeholder='E-mail' />
        </div>
        <div className='password'>
          <input type="password" name='password' placeholder='Password' />
        </div>        
        <button> 
          Login
        </button>        
      </div>
    </div>
  )
}
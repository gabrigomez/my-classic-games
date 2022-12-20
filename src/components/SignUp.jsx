import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeError, register } from '../actions/auth';

import './SignUp.css';

export const SignUp = () => {
  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();   

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  let handleSubmit = (e) => {
    e.preventDefault();

    dispatch(register(username, email, password, confirmPassword))
      .then(() => {
        navigate("/login");        
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      });
  }
  
  useEffect(() => {
    dispatch(closeError());
  }, [dispatch]); 
  
  return (
    <div className='signup-form-container'>
      <form className='signup-form' onSubmit={handleSubmit}>        
        <h1>
          Sign Up
        </h1>
        <div className='name'>
          <input 
          className='sign-up-input' 
          type="text" 
          name='name' 
          placeholder='Your name'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='email'>
          <input 
          className='sign-up-input' 
          type="text" 
          name='email' 
          placeholder='E-mail'
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className='password'>
          <input 
          className='sign-up-input' 
          type="password" 
          name='password' 
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='passwordConfirmation'>
          <input 
          className='sign-up-input' 
          type="password" 
          name='passwordConfirmation' 
          placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>         
        <button className='signup-button'> 
          Register
        </button>
        <div className="error-signup">{message ? <p>{message}</p> : null} </div>
      </form>
    </div>
  )
}
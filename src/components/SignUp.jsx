import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register, clearMessage } from '../features/users/userSlice';

import './SignUp.css';

export const SignUp = () => {
  const { message, isSuccess } = useSelector(store => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({username, email, password, confirmPassword}));
  };
 
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]); 

  if (isSuccess) {
    setTimeout(() => {
      dispatch(clearMessage());
      navigate("/login");    
    }, 2000);
  };
 
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
        <div className='password-confirmation'>
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
        <div className="error-signup">
          {message ? message : null} 
        </div>
      </form>
    </div>
  )
}
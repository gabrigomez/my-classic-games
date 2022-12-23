import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, closeError } from '../features/users/userSlice';

import './Login.css'

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();   
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, message } = useSelector(store => store.users);

  let handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({email,password}))
      if (isLoggedIn) {
        navigate("/dashboard");
      }
  }; 
  
  useEffect(() => {
    dispatch(closeError());
  }, [dispatch]);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }   

  return (
    <div className='login-form-container'>      
      <form className='login-form' onSubmit={handleSubmit}>        
        <h1>
          Login
        </h1>
        <div className='email'>
          <input 
            type="text" 
            name='email' 
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className='password'>
          <input 
            type="password" 
            name='password' 
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>        
        <button className='login-button'> 
          Login
        </button>
        {<div className="error-login">{message ? <p>{message}</p> : null} </div> }
      </form>
    </div>
  )
}
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, clearMessage, clearSuccess } from '../features/users/userSlice';

import './Login.css'

export const Login = () => {
  const dispatch = useDispatch();  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, message, isSuccess, loading } = useSelector(store => store.users);

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({email,password}));
  }; 
  
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  };
  
  if(isSuccess) {
    dispatch(clearSuccess());
  };

  return (
    <div className='login-form-container'>      
      <form className='login-form' onSubmit={handleSubmit}>        
        <h1 className='text-3xl mb-2'>
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
        <button className='login-button p-2'> 
          Login
        </button>
        <div className="error-login">
          {message ? message : null} 
        </div>
        {loading && (
          <div className='text-blue-200'>
            Loading...
          </div>
        )}
      </form>
    </div>
  );
};
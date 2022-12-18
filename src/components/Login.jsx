import React, { useState } from 'react';
import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { login } from "../actions/auth";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  const navigate = useNavigate();   

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email, password))
      .then(() => {
        navigate("/dashboard");        
      });
  };
 
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
        <button className='login-button' type='submit'> 
          Login
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  )
}
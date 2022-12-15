import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import './Login.css'
import { login } from "../actions/auth";


export const Login = (props) => {
  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState();
  

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(username, password))
     .then(() => {
      navigate("/");     
    })
    console.log(localStorage.getItem('user'));

  };

  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <div className='login-form-container'>
      <form className='login-form' onSubmit={handleLogin}>        
        <h1>
          Login
        </h1>
        <div className='email'>
          <input 
            type="text" 
            name='username' 
            placeholder='Username'
            value={username} 
            onChange={onChangeUsername}
            
          />
        </div>
        <div className='password'>
        <input 
            type="password" 
            name='password' 
            placeholder='Username'
            value={password} 
            onChange={onChangePassword}
            
          />
        </div>        
        <button className='login-button'> 
          Login
        </button>        
      </form>
    </div>
  )
}
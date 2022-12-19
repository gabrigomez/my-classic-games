import React, { useState } from 'react';
import './SignUp.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../actions/auth';
import toast, { Toaster } from 'react-hot-toast';


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
    if(message) {
      toast(`${message}`, {
        duration: 3000,
        style: {
          color: 'red',
          background: 'none',
          border: 'rgb(3, 235, 243)',
          fontWeight: 'bold'
        }
      })
    }
  }
  
  return (
    <div className='signup-form-container'>
      <Toaster />  
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
      </form>
    </div>
  )
}
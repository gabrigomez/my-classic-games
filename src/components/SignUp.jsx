import React, { useState } from 'react';
import './SignUp.css';

import axios from 'axios';


export const SignUp = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      setMessage('Senhas não conferem');
      return;
    }
    try {
      let res = await axios.post("http://localhost:3001/auth/register", {        
          username,
          email,
          password: password,
          confirmPassword: passwordConfirmation
        });     
      if (res.status === 201) {
        setUsername("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
        setMessage("Usuário cadastrado com sucesso!");
      }
    } catch (err) {
      console.log(err);
      setMessage(err.response.data.msg)
    }
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
        <div className='passwordConfirmation'>
          <input 
          className='sign-up-input' 
          type="password" 
          name='passwordConfirmation' 
          placeholder='Confirm Password'
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)} 
          />
        </div>         
        <button className='signup-button'> 
          Register
        </button>
        <div className="message">{message ? <p>{message}</p> : null}</div>        
      </form>
    </div>
  )
}
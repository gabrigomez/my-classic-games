import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'
import { Navigate, redirect, useNavigate } from 'react-router-dom';


export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();    
    try {
      let res = await axios.post("http://localhost:3001/auth/login", {
          email,
          password: password,
        });     
      if (res.status === 201) {
        setEmail("");
        setPassword("");
        setMessage("Logado com sucesso!");
        localStorage.setItem('token', res.data.token);       
      }
    } catch (err) {
      console.log(err);
      setMessage(err.response.data.msg)
    }

    //return redirect("/dasboard")

    //TODO: solve redirect in login
  };

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
import React from 'react';

import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>      
        <div className='home'>Home</div>
        <div className='login-container'>
          <div className='login'>
            Login
          </div>
          <div className='sign-up'>
            Sign Up
          </div>
        </div>      
    </nav>
  )
}
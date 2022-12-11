import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export const NavBar = () => {
  return (
    <nav>      
        <div className='home'>
          <Link to="/">
            Home
          </Link>
          </div>
        <div className='login-container'>
          <div className='login'>
            <Link to="/login">
              Login
            </Link>
          </div>
          <div className='sign-up'>
            <Link to="/signup">
              Sign Up
            </Link>
          </div>
        </div>      
    </nav>
  )
}
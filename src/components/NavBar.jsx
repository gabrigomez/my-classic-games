import { GameController, PaperPlaneRight, Scroll } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

export const NavBar = () => {
  const isLogged = localStorage.getItem('token') === null ? false : true;

  const handleLogout = () => {
    localStorage.removeItem('token');
  }
  return (
    <nav>      
        <div className='home'>
        <GameController className='icon' color='white' size={24}  />
          <Link to="/">
            <p>
              Home
            </p>
          </Link>
          </div>
        <div className='login-container'>
          <div className='login'>
          <PaperPlaneRight className='icon' color='white' size={24} />
            {!isLogged ? (
              <Link to="/login">
                <p>
                  Login
                </p>
              </Link>
            ) : (
            <Link to="/login" onClick={handleLogout}>
              <p>
                Logout
              </p>
            </Link>
            )}
          </div>
          <div className='sign-up'>
            <Scroll className='icon' color='white' size={24} />
            <Link to="/signup">
              <p>
                Sign Up
              </p>
            </Link>
          </div>
        </div>      
    </nav>
  )
}
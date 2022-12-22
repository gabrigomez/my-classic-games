import { GameController, House, PaperPlaneRight, Scroll, Sword } from 'phosphor-react';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from "../actions/auth";

import './NavBar.css';

export const NavBar = () => {
  //TODO: toggle the login and logout
  const { isLoggedIn } = useSelector(store => store.users);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <>
      <nav>
        {isLoggedIn ? (
          <Link to="/dashboard" className="navbar-link">
            <Sword className='icon' size={24} />
            <p>
              Dashboard
            </p>
          </Link>
        ) : (
          <Link to="/" className="navbar-link">
            <House className='icon' size={24} />
            <p>
              Home
            </p>
          </Link>
        )}
        {!isLoggedIn ? (                
        <div className='login-container'>
          <Link to="/signup" className="navbar-link">
          <Scroll className='icon' size={24} />
            <p>
              Sign Up
            </p>
          </Link>          
          <Link to="/login" className="navbar-link">              
              <PaperPlaneRight className='icon' size={24} />
                <p>
                  Login
                </p>              
            </Link>
        </div>
        ) : (
        <div className='login-container'>
          <Link to="/my-game-list" className='navbar-link'>
            <GameController className='icon' size={24} />
            <p>
              My Game List
            </p>
          </Link>          
          <Link to="/login" onClick={logOut} className="navbar-link">              
            <PaperPlaneRight className='icon' size={24} />
              <p>
                Logout
              </p>            
          </Link>
        </div>
        )}             
      </nav>
    </>      
  )
}
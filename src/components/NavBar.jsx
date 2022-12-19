import { GameController, House, PaperPlaneRight, Scroll } from 'phosphor-react';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from "../actions/auth";

import './NavBar.css';

export const NavBar = () => {
  //TODO: toggle the login and logout
  const { isLoggedIn } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <nav>      
        <div className='home'>        
          {isLoggedIn ? (
            <div className='home'>
              <GameController className='icon' color='white' size={24} />
              <Link to="/dashboard">
                <p>
                    Dashboard
                </p>
              </Link>
            </div>
          ):(
            <div className='home'>
              <House className='icon' color='white' size={24} />
              <Link to="/">
                <p>
                  Home
                </p>
              </Link>
            </div>
          )}
        </div>
        <div className='login-container'>
          <div className='login'>
          <PaperPlaneRight className='icon' color='white' size={24} />
            {!isLoggedIn ? (
              <Link to="/login">
                <p>
                  Login
                </p>
              </Link>
            ) : (
            <Link to="/login" onClick={logOut}>
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
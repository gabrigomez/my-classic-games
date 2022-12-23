import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import './Dashboard.css';

export const Dashboard = () => {
  const { isLoggedIn, user: currentUser } = useSelector(store => store.users);

  if(!isLoggedIn){
    return <Navigate to="/login" />
  }
  return (
    <div className='dashboard-container'>
      <div className='dashboard-card'>
        <div className='user-gamelist'>          
            <h1 className='dashboard-title'>
              Hey, {currentUser.username}!
            </h1>          
          <h3>
            Welcome to My game list dashboard.
          </h3>
          <div className='gamelist'>
            My game list will be here
          </div>
        </div>
        <div className='user-card'>
          <div className='user-info'>
            <div className='user-email'>              
              <div>
                {currentUser.username}
              </div>
              <div>
                {currentUser.email}
              </div>
              <Link to="/edit-user">
                Edit my infos
              </Link>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
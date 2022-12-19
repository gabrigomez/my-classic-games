import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './Dashboard.css';

export const Dashboard = () => {
  const { isLoggedIn } = useSelector(state => state.auth);

  if(!isLoggedIn){
    return <Navigate to="/login" />
  }
  return (
    <div className='dashboard-container'>
      <div className='dashboard-card'>
        <h1 className='dashboard-title'>
          Dashboard Component
        </h1>
      </div>
    </div>
  )
}
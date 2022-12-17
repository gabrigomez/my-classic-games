import React from 'react';
import { Navigate } from 'react-router-dom';
import './Dashboard.css';

export const Dashboard = () => {
  if(!localStorage.getItem('token')){
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
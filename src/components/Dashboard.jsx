import React from 'react';
import { Navigate } from 'react-router-dom';
import './Dashboard.css';

export const Dashboard = () => {
  if(!localStorage.getItem('token')){
    return <Navigate to="/login" />
  }
  return (
    <div className='dashboard-container'>
      Dashboard Component
    </div>
  )
}
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './EditUser.css'

export const EditUser = () => {
  const { isLoggedIn, user: currentUser } = useSelector(state => state.auth);

  if(!isLoggedIn){
    return <Navigate to="/login" />
  }

  return (
    <form className='edit-user-container'>
      <div className='edit-user-card'>
        <div className='edit-username'>
          <h1>
            Username
          </h1>
          <input placeholder={currentUser.user.username} />            
        </div>
        <div className='edit-user-email'>
          <h1>
            Email
          </h1>
          <input placeholder={currentUser.user.email} />      
        </div>
        <button className='edit-button'>
          Save Changes
        </button>
      </div>
    </form>
  )
}
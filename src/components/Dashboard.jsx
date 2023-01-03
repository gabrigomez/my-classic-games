import { IdentificationBadge } from 'phosphor-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { getGame } from '../features/users/userSlice';
import './Dashboard.css';

export const Dashboard = () => {
  const { isLoggedIn, user: currentUser, gameList } = useSelector(store => store.users);
  const dispatch = useDispatch();

  const id = currentUser._id;

  if(!isLoggedIn){
    return <Navigate to="/login" />
  }

  if(currentUser && gameList.length === 0) {
    dispatch(getGame({id}))
  }
  
  return (
    <div className='dashboard-container'>
      <div className='dashboard-card'>
        <div className='user-gamelist'>
          <div className='gamelist-info'>          
            <h1 className='dashboard-title'>
              Hey, player!
            </h1>          
            <h3>
              Welcome to dashboard.
            </h3> 
          </div>          
          <div className='gamelist'>
              My game list will be here
          </div>
        </div>
        <div className='user-card'>
          <div className='user-info'>
            <IdentificationBadge className='user-icon' size={200} />
            <div className='user-email'>              
                <h1 className='username'>
                  {currentUser.username}
                </h1>
              <h3 className='email-info'>
                {currentUser.email}
              </h3>
              <Link className='edit-info-link' to="/edit-user">
                Edit my info
              </Link>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
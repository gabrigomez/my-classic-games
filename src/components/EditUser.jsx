import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { editUser } from '../features/users/userSlice';
import './EditUser.css'

export const EditUser = () => {
  const { isLoggedIn, user: currentUser } = useSelector(store => store.users);
  const [newUsername, setNewUsername] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = currentUser._id
  console.log(id)

  if(!isLoggedIn){
    return <Navigate to="/login" />
  }
 
  let handleEdit = (e) => {
    e.preventDefault();

    dispatch(editUser({newUsername, id}));
  };

  return (
    <div className='edit-user-container'>
      <form className='edit-user-card' onSubmit={handleEdit}>
        <div className='edit-username'>
          <h1>
            Username
          </h1>
          <input           
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)} />            
        </div>
        {/* <div className='edit-user-email'>
          <h1>
            Email
          </h1>
          <input          
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)} 
          />                
        </div> */}
        <button className='edit-button'>
          Save Changes
        </button>
       </form>
    </div>
  )
}
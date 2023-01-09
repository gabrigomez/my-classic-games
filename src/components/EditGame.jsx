import { ArrowUUpLeft } from 'phosphor-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearMessage } from '../features/users/userSlice';

import './EditGame.css';

export const EditGame = () => {
  const { game, message } = useSelector(store => store.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [newTitle, setNewTitle] = useState(game.title);
  const [newGenre, setNewGenre] = useState(game.genre);
  const [newDescription, setNewDescription] = useState(game.description);
  const [newImageUrl, setNewImageUrl] = useState(game.imageUrl);
  
 
  let handleEdit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      dispatch(clearMessage());
    },2000);
  };

  return (
    <div className='edit-game-container'>
      <form className='edit-game-card' onSubmit={handleEdit}>
        <div className='edit-game'>
          <h1>
            Title
          </h1>
          <input           
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)} />            
        </div>
        <div className='edit-game'>
          <h1>
            Genre
          </h1>
          <input          
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)} 
          />                
        </div>
        <div className='edit-game'>
          <h1>
            Description
          </h1>
          <input          
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)} 
          />                
        </div>
        <div className='edit-game'>
          <h1>
            Image
          </h1>
          <input          
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)} 
          />                
        </div>
        <button className='edit-button'>
          Save Changes
        </button>
        <ArrowUUpLeft size={36} className="edit-back-button" onClick={() => navigate(-1)}/>
        <div className="edit-message">
          {message ? message : null} 
        </div>
       </form>
    </div>
  )
}
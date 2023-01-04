import { ArrowUUpLeft } from 'phosphor-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addGame, clearMessage } from '../features/users/userSlice';
import "./AddGame.css";

export const AddGame = () => {

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const { user: currentUser, message} = useSelector(store => store.users)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const id = currentUser._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addGame({title, genre, description, imageUrl, id}));
    setTimeout(() => {
      dispatch(clearMessage());
    },4000);
  }

  return (
    <div className='add-game-container'>      
      <form className='add-game' onSubmit={handleSubmit}>        
        <h1>
          Add Game
        </h1>
        <div className='title'>
          <input 
            type="text" 
            name='title' 
            placeholder='Game Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className='genre'>
          <input 
            type="text" 
            name='genre' 
            placeholder='Genre'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div className='description'>
          <input 
            type="text" 
            name='description' 
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className='iamge-url'>
          <input 
            type="text" 
            name='imageUrl' 
            placeholder='Image URL'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>            
        <button className='add-game-list-button'> 
          Add Game on List
        </button>
        {<div className="add-game-list-error">{message ? <p>{message}</p> : null} </div> }
        <ArrowUUpLeft size={36} className="edit-back-button" onClick={() => navigate(-1)}/>
      </form>
    </div>
  )
}
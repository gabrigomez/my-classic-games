import React, { useState } from 'react';
import "./AddGame.css";

export const AddGame = () => {

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  return (
    <div className='add-game-container'>      
      <form className='add-game'>        
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
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>            
        <button className='add-game-list-button'> 
          Add Game on List
        </button>
        {/* {<div className="add-game-list-error">{message ? <p>{message}</p> : null} </div> } */}
      </form>
    </div>
  )
}
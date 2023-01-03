import * as React from 'react';

export const Game = (title, genre, description, imageUrl) => {
  return (
    <div className='game-container'>
      <div className='game-title'>
        {title}
      </div>
      <div className='game-genre'>
        {genre}
      </div>
      <div>
        {description}
      </div>
      <div>
        <img src={imageUrl} alt="" />
      </div>
    </div>
  )
}
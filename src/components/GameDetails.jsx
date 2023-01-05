import { Trash } from 'phosphor-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteGame, showGameDetails } from '../features/users/userSlice';
import './GameDetails.css';

export const GameDetails = () => {
  const { game } = useSelector(store => store.users);
  const gameId = window.location.href.split('/').reverse()[0];
  
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteGame({id: gameId}));
  }

  if(!game) {
    dispatch(showGameDetails({id: gameId}));
  };

  return (
    <div className='game-details-container'>
      <div className='game-details'>
        {game? (
          <div className='game-details-card'>
            <div>
              <img src={game.imageUrl} alt="" className='game-image-info'/> 
            </div>
            <div className='game-title-info'>
              {game.title}
            </div>
            <div className='game-genre-info'>
              {game.genre}
            </div>
            <div className='game-description-info'>
              {game.description}
            </div>
            <Trash size={36} className='game-delete-button' onClick={handleDelete}/>
          </div>
        ) : 
        <div>
          Loading...
        </div>
        }        
      </div>
    </div>
  )
}
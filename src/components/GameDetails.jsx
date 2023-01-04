import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showGameDetails } from '../features/users/userSlice';
import './GameDetails.css';

export const GameDetails = () => {
  const { game } = useSelector(store => store.users);
  console.log(game);

  const dispatch = useDispatch();
  const gameId = window.location.href.split('/').reverse()[0];

  if(!game) {
    dispatch(showGameDetails({id: gameId}));
  };

  return (
    <div className='game-details-container'>
      <div className='game-details-info'>
        Game Details Info
        {game? (
         <div>
          {game.title}
         </div>
        ) : 
        <div>
          No game
        </div>
        }        
      </div>
    </div>
  )
}
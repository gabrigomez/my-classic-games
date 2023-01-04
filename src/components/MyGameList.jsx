import { PlusCircle } from 'phosphor-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearGame } from '../features/users/userSlice';
import "./MyGameList.css";

export const MyGameList = () => {
  const { gameList, game } = useSelector(store => store.users);
  const dispatch = useDispatch();

  if(game) {
    dispatch(clearGame());
  };

  return (
    <div className='my-game-list-container'>
      <div className='gamelist-card'>
        {gameList?.map((game) => (
          <div className='gamelist-info'>
            <div className='game-title'>
                {game.title}
            </div>
            <div>
              <img src={game.imageUrl} alt="" className='game-image'/>              
            </div>
            <Link to={`/game/details/${game._id}`}>
              More Info 
            </Link>
          </div>          
        ))}     
      </div>
      <Link className='add-game-button' to='/add-game'>
        <PlusCircle className='add-button-icon' size={24}/>
        Add game
      </Link>
    </div>
  )
}
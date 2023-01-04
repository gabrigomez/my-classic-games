import { PlusCircle } from 'phosphor-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./MyGameList.css";

export const MyGameList = () => {
  const { gameList } = useSelector(store => store.users);

  return (
    <div className='my-game-list-container'>
      <div className='gamelist-card'>
        {gameList?.map((game) => (
          <div>
            {game.title}
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
import { PlusCircle } from 'phosphor-react';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Game } from './Game';
import "./MyGameList.css";

export const MyGameList = () => {
  const { gameList } = useSelector(store => store.users);
  gameList?.map((game) => {
    console.log(game.title);
  })

  return (
    <div className='my-game-list-container'>
      <div className='gamelist-card'>
        {/* {gameList?.map((game) => (
          <Game
          key={game.id}
          title={game.title}
          genre={game.genre}
          description={game.description}
          imageUrl={game.imageUrl}
          />
        ))}     */}
      </div>
      <Link className='add-game-button' to='/add-game'>
        <PlusCircle className='add-button-icon' size={24}/>
        Add game
      </Link>
      
    </div>
  )
}
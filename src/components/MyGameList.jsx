import { PlusCircle } from 'phosphor-react';
import React from 'react';
import "./MyGameList.css";

export const MyGameList = () => {
  return (
    <div className='my-game-list-container'>
      <div className='gamelist-card'>
        <div className='game-card'>
          game1
        </div>
        <div className='game-card'>
          game2
        </div>
        <div className='game-card'>
          game3
        </div>
        <div className='game-card'>
          game4
        </div>
        <div className='game-card'>
          game5
        </div>
        <div className='game-card'>
          game6
        </div>
        <div className='game-card'>
          game7
        </div>
        <div className='game-card'>
          game8
        </div>
      </div>
      <button className='add-game-button'>
        <PlusCircle className='add-button-icon' size={24} />
        Add game
      </button>
      
    </div>
  )
}
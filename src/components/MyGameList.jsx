import { Eye, EyeClosed, PlusCircle, SmileyXEyes } from 'phosphor-react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearGame } from '../features/users/userSlice';
import "./MyGameList.css";
import { Pagination } from './Pagination';

export const MyGameList = () => {
  const { gameList, game } = useSelector(store => store.users);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(8);

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = gameList?.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  if(game) {
    dispatch(clearGame());
  };

  return (
    <div className='my-game-list-container'>
      {currentGames? (
        <div className='gamelist-card'>
          {currentGames.map((game) => (
            <Link to={`/game/details/${game._id}`} className='gamelist-info' key={game._id}>
              <div className='game-title'>
                  {game.title}
              </div>
              <div>
                <img src={game.imageUrl} alt="" className='game-image'/>              
              </div>
              <EyeClosed className='eye-closed' size={20} />
              <Eye className='eye-open' size={20} />                  
            </Link>
          ))}
        </div>
      ) : (
        <div className='gamelist-card-empty'>
          <SmileyXEyes size={96} color="white" />
          <h1>
            Sem games cadastrados.
          </h1>
        </div>
      )}
      <Pagination gamesPerPage={gamesPerPage} totalGames={gameList?.length} paginate={paginate} />     
      <Link className='add-game-button' to='/add-game'>
        <PlusCircle className='add-button-icon' size={18}/>
        Add game
      </Link>
    </div>
  )
}
import { ClipboardText, IdentificationBadge, Plus, Spiral } from 'phosphor-react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { getGame } from '../features/users/userSlice';
import './Dashboard.css';

export const Dashboard = () => {
  const { isLoggedIn, user: currentUser, gameList, loading } = useSelector(store => store.users);
  const dispatch = useDispatch();
  const id = currentUser._id;

  if(!isLoggedIn){
    return <Navigate to="/login" />
  };

  if(currentUser && gameList === null) {
    dispatch(getGame({id}));
  };
  
  return (
    <div className='dashboard-container'>
      <div className='dashboard-card'>
        <div className='user-gamelist'>
          <div className='dashboard-gamelist-info'>          
            <h1 className='dashboard-title'>
              Hey, player!
            </h1>          
            <h3>
              Welcome to dashboard.
            </h3> 
          </div>
          {gameList?.length > 0 ? (
            <div className='dashboard-game-gallery'>
              <div className='game-gallery-info'>
                <ClipboardText color='white' />
                <p>My Game List</p>
              </div>
              <Link className='game-gallery-images' to="/my-game-list">
                {gameList?.map((game) => (
                  <img className='game-image' src={game.imageUrl} alt="" key={game._id} />                    
                ))}
              </Link>
            </div>          
          ) : (
            <div className='dashboard-game-gallery'>
              {loading && (
                <div className='flex w-full justify-center items-center'>                    
                  <Spiral className="text-cyan-300 animate-spin h-20 w-20 mt-1" />
                </div>
              )}
              {gameList?.length === 0 && (
                <div className='flex flex-col w-full justify-center items-center'>
                  <p>Sem games cadastrados.</p>
                  <div className='game-gallery-info'>
                    <Plus size={20} className='plus-icon'/>
                    <Link to='/add-game' className='dashboard-add-game'>Adicionar game</Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className='user-card'>
          <div className='user-info'>
            <IdentificationBadge className='user-icon'/>
            <div className='user-email'>              
              <h1 className='username'>
                {currentUser.username}
              </h1>
              <p className='email-info'>
                {currentUser.email}
              </p>
              <Link className='edit-info-link' to="/edit-user">
                Edit my info
              </Link>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
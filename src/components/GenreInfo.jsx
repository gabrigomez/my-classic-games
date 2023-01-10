import React from 'react';
import { 
  Factory, 
  FinnTheHuman, 
  FlagCheckered, 
  GameController, 
  Ghost, 
  MagicWand, 
  PersonSimpleRun, 
  Skull, 
  SmileyNervous, 
  SoccerBall, 
  Strategy, 
  Sword 
} from 'phosphor-react';
import './GenreInfo.css';

export const GenreInfo = (genre) => {
  const genreObj = {
    title: genre.genre,
    icon: '', 
  };

  switch (genre.genre) {
    case ('Action'):
      genreObj.icon = <Ghost size={20} color="white" />;
      break;
    case ('Adventure'):
      genreObj.icon = <FinnTheHuman size={20} color="white" />
      break;
    case ('Fight'):
      genreObj.icon = <Skull size={20} color="white"/>;
      break;
    case ('FPS'):
      genreObj.icon = <Sword size={20} color="white"/>;
    break;
    case ('Racing'):
      genreObj.icon = <FlagCheckered size={20} color="white"/>;
    break;
    case ('Role-Playing'):
      genreObj.icon = <MagicWand size={20} color="white"/>;
    break;
    case ('Simulation'):
      genreObj.icon = <Factory size={20} color="white"/>;
    break;
    case ('Strategy'):
      genreObj.icon = <Strategy size={20} color="white"/>;
    break;
    case ('Sports'):
      genreObj.icon = <SoccerBall size={20} color="white"/>;
    break;
    case ('Terror'):
      genreObj.icon = <SmileyNervous size={20} color="white"/>;
    break;
    case ('TPS'):
      genreObj.icon = <PersonSimpleRun size={20} color="white"/>;
    break;
    default:
      genreObj.icon = <GameController size={20} color="white"/>;
    };  

  return (
    <div className='genre-info-container'>
      <div className='genre-info-icon'>
        {genreObj.icon}
      </div>
      <p className='genre-info-title'>
        {genreObj.title}
      </p>
    </div>
  );
};
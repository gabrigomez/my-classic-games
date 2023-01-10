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
import React from 'react';

export const GenreInfo = (genre) => {
  const genreObj = {
    title: genre.genre,
    icon: '', 
  };

  switch (genre.genre) {
    case ('Action'):
      genreObj.icon = <Ghost size={24} color="white" />;
      break;
    case ('Adventure'):
      genreObj.icon = <FinnTheHuman size={24} color="white" />
      break;
    case ('Fight'):
      genreObj.icon = <Skull size={24} color="white"/>;
      break;
    case ('FPS'):
      genreObj.icon = <Sword size={24} color="white"/>;
    break;
    case ('Racing'):
      genreObj.icon = <FlagCheckered size={24} color="white"/>;
    break;
    case ('Role-Playing'):
      genreObj.icon = <MagicWand size={24} color="white"/>;
    break;
    case ('Simulation'):
      genreObj.icon = <Factory size={24} color="white"/>;
    break;
    case ('Strategy'):
      genreObj.icon = <Strategy size={24} color="white"/>;
    break;
    case ('Sports'):
      genreObj.icon = <SoccerBall size={24} color="white"/>;
    break;
    case ('Terror'):
      genreObj.icon = <SmileyNervous size={24} color="white"/>;
    break;
    case ('TPS'):
      genreObj.icon = <PersonSimpleRun size={24} color="white"/>;
    break;
    default:
      genreObj.icon = <GameController size={24} color="white"/>;
    };  

  return (
    <div>
      <div>
        {genreObj.icon}
      </div>
      <div>
        {genreObj.title}
      </div>
    </div>
  );
};
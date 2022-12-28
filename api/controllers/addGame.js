const Game = require('../models/Game');

async function addGame (req, res) {
  const { name, genre, description, image } = req.body;
  const user_id = req.params;
  
  if(!name) {
    return res.status(422).json({ msg: 'O nome do jogo é obrigatório'});
  };

  if(!genre) {
    return res.status(422).json({ msg: 'O gênero é obrigatório'});
  };

  if(!description) {
    return res.status(422).json({ msg: 'Escreva uma descrição'});
  };

  if(!image) {
    return res.status(422).json({ msg: 'Adicione uma imagem da web'});
  };

  const game = new Game ({
    name,
    genre,
    description,
    image,
    user_id
  });

  try {
    await game.save();
    res.status(201).json({ msg: 'Game cadastrado com sucesso', game});

  } catch(error) {
    console.log(error);
    res.status(500).json({ msg: 'Aconteceu um erro no servidor. Tente mais tarde'});
  };
};

module.exports = addGame;
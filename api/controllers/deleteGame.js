const Game = require('../models/Game');

async function deleteGame (req, res) {
  const id = req.params;

  await Game.deleteOne(id);
  res.status(200).json({ msg: 'Game Excluído com sucesso'});
};

module.exports = deleteGame;
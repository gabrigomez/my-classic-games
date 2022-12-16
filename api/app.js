require('dotenv').config({ path: "api/.env" });
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app =  express()
app.use(express.json())
const User = require('./models/User')

app.get('/', (req, res) => {
  res.status(200).json({ msg: "Welcome to the my-game-list api"});
});

//Register User
app.post('/auth/register', async(req, res) => {
  
  const {username, email, password, confirmPassword} = req.body;
  
  if(!username) {
    return res.status(422).json({ msg: 'O nome de usuário é obrigatório'});
  }
  if(!email) {
    return res.status(422).json({ msg: 'O e-mail de usuário é obrigatório'});
  }
  if(!password) {
    return res.status(422).json({ msg: 'A senha de usuário é obrigatória'});
  }
  if(password !== confirmPassword) {
    return res.status(422).json({ msg: 'As senhas não conferem'});
  }

  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(422).json({ msg: 'E-mail já cadastrado'});
  }

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({
    username,
    email,
    password: passwordHash
  })

  try {
    await user.save();
    res.sendStatus(201).json({ msg: 'Usuário cadastrado com sucesso'});

  } catch(error) {
    console.log(error);
    res.status(500).json({ msg: 'Aconteceu um erro no servidor. Tente mais tarde'});
  }
})

//Credencials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const dbLink = `mongodb+srv://${dbUser}:${dbPass}@cluster0.1q4iqd6.mongodb.net/?retryWrites=true&w=majority`
mongoose.set("strictQuery", false);

mongoose.connect(dbLink).then(() => {
  app.listen(3001)
  console.log('Conected to MongoDB')

}).catch((err) => console.log(err));


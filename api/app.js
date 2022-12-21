require('dotenv').config({ path: "api/.env" });
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors')


const app =  express();
app.use(express.json());

app.use(cors()) 
const User = require('./models/User');

app.get('/', (req, res) => {
  res.status(200).json({ msg: "Welcome to the my-game-list api"});
});

function checkToken(req, res, next) {

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if(!token) {
    return res.status(401).json({ msg: 'Acesso negado'});
  }

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();

  } catch(error) {
    return res.status(400).json({ msg: 'Token Inválido'});
  }
}

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
    res.status(201).json({ msg: 'Usuário cadastrado com sucesso'});

  } catch(error) {
    console.log(error);
    res.status(500).json({ msg: 'Aconteceu um erro no servidor. Tente mais tarde'});
  }
});

//Login user
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body

  if(!email) {
    return res.status(422).json({ msg: 'O e-mail de usuário é obrigatório'});
  }
  if(!password) {
    return res.status(422).json({ msg: 'A senha de usuário é obrigatória'});
  }

  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: 'Usuário não cadastrado'});
  }

  const checkPassword = await bcrypt.compare(password, user.password)

  if(!checkPassword) {
    return res.status(422).json({ msg: 'Senha incorreta'});
  }

  try {
    const secret = process.env.SECRET;

    const token = jwt.sign({
      id:user._id,
    },
    secret,
    )
  res.status(201).json({ msg: 'Login realizado com sucesso', token, user});

  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Aconteceu um erro no servidor. Tente mais tarde'});
  }

});

//Private Route
app.get("/user/:id", checkToken, async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id, '-password')

  if (!user) {
    return res.status(404).json({ msg: 'Usuário não cadastrado'});
  }

  res.status(200).json({ user });

});

// Change username - TODO: back the middleware to check user
app.put("/user/:_id", async (req, res) => {
  const username = req.body;
  const id = req.params;


  if(!username) {
    return res.status(422).json({ msg: 'O nome de usuário é obrigatório'});
  }

  let newUsername = await User.updateOne(
    req.params,
    {$set: username}
  );

  const user = await User.findById(id, '-password')

  res.status(200).json({ user });
});

//Credencials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const dbLink = `mongodb+srv://${dbUser}:${dbPass}@cluster0.1q4iqd6.mongodb.net/?retryWrites=true&w=majority`
mongoose.set("strictQuery", false);

mongoose.connect(dbLink).then(() => {
  app.listen(3001)
  console.log('Conected to MongoDB')

}).catch((err) => console.log(err));


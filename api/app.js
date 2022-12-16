require('dotenv').config({ path: "api/.env" });
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app =  express()

app.get('/', (req, res) => {
  res.status(200).json({ msg: "Welcome to the my-game-list api"});
});

//Credencials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const dbLink = `mongodb+srv://${dbUser}:${dbPass}@cluster0.1q4iqd6.mongodb.net/?retryWrites=true&w=majority`
mongoose.set("strictQuery", false);

console.log(dbUser);

mongoose.connect(dbLink).then(() => {
  app.listen(3001)
  console.log('Conected to MongoDB')

}).catch((err) => console.log(err));


const express = require('express');
const characterMiddleware = require('./middlewares/character.js');
const abilityMiddleware = require('./middlewares/ability.js');
const routes = require('./middlewares/character.js')

const server = express();

server.use(express.json());
server.use(routes);

server.use('/character', characterMiddleware);
server.use('/ability', abilityMiddleware);

server.get('/', (req, res) => {
  res.send('Henry Sequelize Homework');
});

module.exports = server;
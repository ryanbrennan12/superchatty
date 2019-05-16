
const { Client } = require('pg');
const Sequelize = require('sequelize');
require('dotenv').config;


const db = {
  user: sequalize.import('/user'),
  channel: sequalize.import('/channel'),
  member: sequalize.import('/member'),
  message: sequalize.import('/message'),
  team: sequalize.import('/team'),
};

const sequelize = new Sequelize(process.env.DATABASE, process.env.DBUSERNAME, process.env.DBPASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to DATABASE!!');
  })
  .catch(err => {
    console.error('Unable to connect to the database.  SEE ERROR:', err);
  });

db.sequelize = sequelize;
db.Sequalize = Sequalize;

model.exports = db;

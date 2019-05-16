const { Client } = require('pg');
const Sequelize = require('sequelize');
require('dotenv').config;



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


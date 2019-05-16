
const { Client } = require('pg');
const Sequelize = require('sequelize');
require('dotenv').config;


const sequelize = new Sequelize(process.env.DATABASE, process.env.DBUSERNAME, process.env.DBPASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
});
const db = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),
};

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to DATABASE!!');
  })
  .catch(err => {
    console.error('Unable to connect to the database.  SEE ERROR:', err);
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

model.exports = db;




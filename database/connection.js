const { Client } = require('pg');
require('dotenv').config;


let client = new Client({
  user: process.env.DBUSERNAME,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.DBPASSWORD,
  port: process.env.DBPORT
});

client.connect((err) => {
  if (err) {
    throw `We have an error ${err}`;
  } else {
    console.log('Connected to DB!!')
  }
})
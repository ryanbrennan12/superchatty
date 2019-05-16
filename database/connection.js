require('dotenv').config;
const mysql = require('mysql');


const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DBNAME
  }
});


knex().then((err) =>{
  if (err) {
    throw err
  } else {
    console.log('database connected!!')
  }
})

// const con = mysql.createConnection({

//     host: 'localhost',
//     user: 'root',
//     password: ''
// })

// con.connect((err) => {
//   if (err) {
//     throw err
//   } else {
//     console.log('connected to DB')
//   }
// })

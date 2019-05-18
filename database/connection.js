require('dotenv').config;
const mysql = require('mysql');


const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'splat'
  }
});




knex.select('*').from('teams').leftJoin('users', function () {
  this.on("users.id", "=", "teams.owner_id")
      .where("teams.owner_id", "=", "2").then((results) => {
        console.log
      })
})
//


let str = `SELECT reviews.review_id, reviews.user_id, reviews.trail_id, reviews.description, reviews.rating, reviews.date, activities.body \
FROM reviews left join activities on activities.activity_id = reviews.act_id WHERE reviews.review_id = ${reviewId}`;
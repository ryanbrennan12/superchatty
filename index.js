
const express = require('express');
// const graphqlHTTP = require('express-graphql');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
// const models = require('./models');



const app = express();
const port = 4000;

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});





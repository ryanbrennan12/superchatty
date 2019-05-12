
const express = require('express');
// const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./schema');





const app = express();
const port = 3000;

app.use('/graphql', graphiqlExpress({
  endpoint: 'graphql',
}));

app.listen(port, () => {
  console.log(`The server has started on port: ${port}`);
  console.log(`http://localhost:${port}/graphql`);
});
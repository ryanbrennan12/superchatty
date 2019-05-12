import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress } from 'apollo-server-express';



const app = express();

app.use('/graphiql', graphiqlExpress({
  endPointURL: '/graphql',
}));
//
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));



server.listen(3000);
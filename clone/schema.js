// export default `
//     type Query {
//       hi: String
//     }

// `;
const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
  //GraphQLSchema takes in a root query and returns a GraphQLSchema  instance
} = graphql;

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: QueryType, // 2) then I give you this
      args: { id: { type: GraphQLString }}, // 1) if you give me this
      //arguments required for this root query
      resolve(parentValue, args) {
        //return raw json here and graphql takes care of the rest/
        //resolve must return data that represents a user object
        //resolve(null, { id: 23 })

        return 'hi back'

        //need to make an HTTP request in here and return the promise that it generates
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
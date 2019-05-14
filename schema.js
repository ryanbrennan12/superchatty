const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
  //GraphQLSchema takes in a root query and returns a GraphQLSchema  instance
} = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }
});
const TeamType = new GraphQLObjectType({
  name: 'Team',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    owner: {
      type: UserType,
      resolve(parentValue, args) {
        //parent value is the node on the graph where the query is coming from

        return axios.get(`http://localhost:3000/users/${parentValue.ownerId}`)
          .then(res => res.data);
      }
    }
  }
});

const ChannelType = new GraphQLObjectType({
  name: 'Channel',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    team: {
      type: TeamType,
      resolve(parentValue, args) {
        console.log('I am the parent value', parentValue)
        return axios.get(`http://localhost:3000/teams/${parentValue.teamId}`)
          .then(res => res.data);
      }
    }
  }
});
///these are the queries we write
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType, // 2) then I give you this
      args: { id: { type: GraphQLString } }, // 1) if you give me this
      //arguments required for this root query
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/users/${args.id}`)
          .then(resp => resp.data);
      }
    },
    team: {
      type: TeamType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/teams/${args.id}`)
          .then(res => res.data);
      }
    },
    channel: {
      type: ChannelType,
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios.get(`http://localhost:3000/channels/${args.id}`)
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});






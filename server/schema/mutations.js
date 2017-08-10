const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString} = graphql

const userType = require('./types/user_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args, request) {}
    }
  }
});


module.exports = mutation;

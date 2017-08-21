const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString} = graphql

const userType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: userType,
      args: {
        email: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        }
      },
      resolve(parentValue, {email, password}, req) {
        return AuthService.signup(email, password, req);
      }
    },
    logout: {
      type: userType,
      resolve(parentValue, args, req) {
        const {user} = req;
        reg.logout();
        return user;
      }
    },
    login: {
      type: userType,
      args: {
        email: {
          type: GraphQLString
        },
        password: {
          type: GraphQLString
        }
      },
      resolve(parentValue, {email, password}, req) {
        return AuthService.login({
          email,
          password,
          req
        });
      }
    }
  }
});


module.exports = mutation;

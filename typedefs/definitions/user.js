"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const userDefinition = (0, apollo_server_1.gql) `
  type Users {
    _id: ID!
    name: String!
    picture:String!
    gender:String
    title: String!
    numberOfTaskCreared:Float
    
  }

  input UsersInput {
    name: String
    email: String
    password: String
    title: String
    picture: String
    _id: ID
  }
`;
exports.default = userDefinition;

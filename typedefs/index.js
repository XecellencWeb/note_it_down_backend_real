"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const user_1 = __importDefault(require("./definitions/user"));
const tasks_1 = __importDefault(require("./definitions/tasks"));
const typeDefs = (0, apollo_server_1.gql) `
  type Query {
    getUser(name:String!,password:String!): Users!
    getAuthorisedUsers(_id: ID!): [Users]
    getUserSearch(searchString: String!): [Users]

    getTasks(createdBy: ID!): [Tasks!]!
  }

  type Mutation {
    createUser(user: UsersInput!): Users!
    updateUser(_with: UsersInput!, id: String!): Users!
    requestUserAuthorizing(user: UsersInput!, authorisedBy: ID!): String!
    cancelRequestUserAuthorizing(user: UsersInput!, authorisedBy: ID!): String!
    authorizeUser(userId: ID!, authorisingId: ID!): String!

    createTask(task: TasksInput!, userId: String!): Tasks!
    updateTask(taskId: ID!, task: TasksInput!): Tasks!
    deleteTask(taskId: ID!): String!
  }
`;
exports.default = [user_1.default, tasks_1.default, typeDefs];

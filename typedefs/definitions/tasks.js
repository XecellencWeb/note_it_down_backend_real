"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const taskDefinitions = (0, apollo_server_1.gql) `

                type TaskInstance{
                    name: String
                    description: String
                    picture:String
                }

                type Tasks {
                    _id: ID!
                    name: String!
                    description:String!
                    createdBy: ID!
                    tasks:[TaskInstance]!
                }


                
                input TaskInstanceInput{
                    name: String
                    description: String
                    picture:String

                }

                input TasksInput{
                    name: String
                    description:String
                    tasks:[TaskInstanceInput]
                }

`;
exports.default = taskDefinitions;

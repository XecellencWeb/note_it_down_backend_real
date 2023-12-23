"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedefs_1 = __importDefault(require("./typedefs"));
const resolvers_1 = __importDefault(require("./resolvers"));
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const dotenv_1 = require("dotenv");
const mongoose_1 = require("mongoose");
(0, dotenv_1.config)();
const server = new server_1.ApolloServer({
    typeDefs: typedefs_1.default,
    resolvers: resolvers_1.default
});
const startServer = async () => {
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        listen: {
            port: process.env.listening_port
        }
    });
    await (0, mongoose_1.connect)(process.env.mongo_db_url);
    console.log(`server started at : ${url} and connented to mongodb`);
};
startServer();

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("./queries/users"));
const task_1 = __importDefault(require("./queries/task"));
const users_2 = __importDefault(require("./mutations/users"));
const tasks_1 = __importDefault(require("./mutations/tasks"));
exports.default = {
    Query: {
        ...users_1.default,
        ...task_1.default
    },
    Mutation: {
        ...users_2.default,
        ...tasks_1.default
    }
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = __importDefault(require("../../models/task"));
exports.default = {
    getTasks: async (_, args) => {
        const createdBy = args.createdBy;
        try {
            const tasks = task_1.default.find({ createdBy });
            return tasks;
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
};

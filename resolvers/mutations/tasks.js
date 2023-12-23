"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const task_1 = __importDefault(require("../../models/task"));
exports.default = {
    createTask: async (_, args) => {
        const task = args.task;
        const userId = args.userId;
        try {
            const createdTask = await task_1.default.create({ _id: new mongoose_1.default.Types.ObjectId, createdBy: userId, ...task });
            return createdTask;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    updateTask: async (_, args) => {
        const updateWith = args.task;
        const id = args.taskId;
        try {
            const updateTask = await task_1.default.findById(id);
            Object.entries(updateWith).forEach(([key, value]) => {
                updateTask[key] = value;
            });
            await updateTask.save();
            return updateTask;
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    deleteTask: async (_, args) => {
        const id = args.taskId;
        try {
            await task_1.default.findByIdAndDelete(id);
            return 'Task deleted Successfully';
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    createdBy: mongoose_1.Schema.ObjectId,
    tasks: [{
            name: String,
            description: String,
            picture: String,
        }],
    createdAt: {
        type: Date,
        default: () => (Date.now()),
        immutable: true
    }
});
const Task = mongoose_1.models.Tasks || (0, mongoose_1.model)('Tasks', taskSchema);
exports.default = Task;

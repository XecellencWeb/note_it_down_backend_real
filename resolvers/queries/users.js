"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../../models/users"));
exports.default = {
    getUser: async (_, args) => {
        const name = args.name;
        const password = args.password;
        try {
            const user = await users_1.default.findOne({ name });
            if (!user) {
                throw new Error("User does not exist");
            }
            if (user.password !== password) {
                throw new Error("Password Incorrect");
            }
            return user;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    getAuthorisedUsers: async (_, args) => {
        const userId = args._id;
        try {
            const authorizedUsers = await users_1.default.findById(userId);
            return (authorizedUsers.authorized
                .filter((user) => user.authorized)
                .sort((a, b) => a.name - b.name));
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    getUserResquestingAuthorisation: async (_, args) => {
        const userId = args._id;
        try {
            const authorizedUsers = await users_1.default.findById(userId);
            return (authorizedUsers.authorized
                .filter((user) => !user.authorized)
                .sort((a, b) => a.name - b.name));
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    getUserSearch: async (_, args) => {
        const searchString = args.searchString;
        try {
            const searchedUsers = await users_1.default.find({
                $or: [
                    { name: { $regex: searchString, $options: "i" } },
                    { title: { $regex: searchString, $options: "i" } },
                ],
            }).sort({ name: -1 });
            return searchedUsers;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
};

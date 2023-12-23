"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const users_1 = __importDefault(require("../../models/users"));
exports.default = {
    createUser: async (_, args) => {
        const user = args.user;
        try {
            const userExist = await users_1.default.findOne({ name: user.name });
            if (userExist) {
                throw new Error("User already Exist. Please choose a different name");
            }
            const createdUser = await users_1.default.create({
                _id: new mongoose_1.default.Types.ObjectId(),
                ...user,
            });
            return createdUser;
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    updateUser: async (_, args) => {
        const updateWith = args._with;
        const id = args.id;
        try {
            const updateUser = await users_1.default.findById(id);
            Object.entries(updateWith).forEach(([key, value]) => {
                updateUser[key] = value;
            });
            await updateUser.save();
            return updateUser;
        }
        catch (error) {
            throw new Error(error.message);
        }
    },
    authorizeUser: async (_, args) => {
        const toAuthoriseUser = args.userId;
        const authorizingUser = args.authorisingId;
        try {
            const authorised = await users_1.default.findById(authorizingUser);
            authorised.authorized.id(toAuthoriseUser).authorized = true;
            await authorised.save();
            return "Authorization Completed";
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    requestUserAuthorizing: async (_, args) => {
        const user = args.user;
        const authorisedBy = args.authorisedBy;
        try {
            const authorising = await users_1.default.findById(authorisedBy);
            if (authorising.authorized.id(user._id)) {
                throw new Error("Your Request Has already been sent");
            }
            authorising.authorized.push({ ...user });
            await authorising.save();
            return "Authorization Requested";
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
    cancelRequestUserAuthorizing: async (_, args) => {
        const toCancelRequestUser = args.userId;
        const authorizingUser = args.authorisingId;
        try {
            const authorised = await users_1.default.findById(authorizingUser);
            authorised.authorized.filter((request) => request._id !== toCancelRequestUser);
            await authorised.save();
            return "User not Authorized";
        }
        catch (err) {
            throw new Error(err.message);
        }
    },
};

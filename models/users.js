"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: [true, "Username must be Unique"],
    },
    password: String,
    title: String,
    gender: String,
    picture: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    },
    numberOfTaskCreated: {
        type: Number,
        default: 0
    },
    authorized: {
        type: [
            {
                name: String,
                title: String,
                _id: mongoose_1.Schema.ObjectId,
                authorized: {
                    type: Boolean,
                    default: false,
                },
                authorizedAt: {
                    type: Date,
                    default: () => Date.now(),
                },
            },
        ],
        default: [],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
});
const User = mongoose_1.models.Users || (0, mongoose_1.model)("Users", UserSchema);
exports.default = User;

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    _id: {
        type: mongoose.ObjectId,
        index: true,
        required: true,
        auto: true
    },
    username: String,
    pasword: String,
}, { collection: 'user' });
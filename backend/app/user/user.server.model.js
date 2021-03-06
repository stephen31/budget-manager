import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: true },
    account: {type : mongoose.Schema.Types.ObjectId, ref: 'Account'}
});

mongoose.model('User', UserSchema);
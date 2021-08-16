import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
    {
        username: {type: String, requried: true, unique: true},
        email: {type: String, requried: true, unique: true},
        password: {type: String, requried: true},
        profilePic: {type: String, default: ""},
    },
    { timestamps: true}
)


export const User = mongoose.model("User", UserSchema)
import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Age: {
        type: Number,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    }
},
    { timestamps: false });

const User = mongoose.model("user", userSchema)
export default User;
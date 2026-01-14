import moongoose , { Mongoose} from "mongoose";

const userSchema = new moongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
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
{timestamps: false});

const User = moongoose.model("user",userSchema)
export default User;
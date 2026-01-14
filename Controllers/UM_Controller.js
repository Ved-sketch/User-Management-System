import User from "../Models/Schema.js"

export async function getAllUser(req,res){
    try{
        const users = await User.find()
        res.status(200).json(users);
    }
    catch(error){
        console.error("Erron in getAllUser function",error);
        res.status(500).json({message: "Internal Server Error"});
    }
}
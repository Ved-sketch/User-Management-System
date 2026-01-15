import User from "../Models/Schema.js"

export async function getAllUser(req, res) {
    try {
        const users = await User.find()
        res.status(200).json(users);
    }
    catch (error) {
        console.error("Error in getAllUser function", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}

export async function createUser(req, res) {
    try {
        const { Name, Age, Phone, Address, Email } = req.body;
        const newUser = new User({ Name, Age, Phone, Address, Email });
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        console.error("Error in createUser function:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error.message,
            receivedData: req.body 
        });
    }
}

export async function updateUser(req,res){
    try{
        const {Name,Age,Phone,Address,Email} = req.body;
        const updateUser = await User.findByIdAndUpdate(req.params.id,{Name,Age,Phone,Address,Email},{new:true});

        if(!updateUser) res.status(400).json({message:"User not found!"});
        res.status(200).json({message:"User updated successfully!"});
    }
    catch(error){
        console.error("Error in the updateUser controller",error);
        res.status(500).json({message: "Internal server error"});
    }
}
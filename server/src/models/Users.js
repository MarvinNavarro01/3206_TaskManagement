import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String, 
        require: true
    },
    savedTasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tasks"
    }]
});

export const UserModel = mongoose.model("users", UserSchema);
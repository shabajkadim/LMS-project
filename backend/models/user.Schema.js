import mongoose, { Schema, Types } from "mongoose";

const userschema=new Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

export default mongoose.model("userdata",userschema)


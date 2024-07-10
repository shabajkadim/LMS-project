import mongoose, { Schema } from "mongoose";

const addCourseSchema=new Schema({
    courseName:{
        type:String,
        require:true,
    },
    level:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})
export default mongoose.model("courseData",addCourseSchema)
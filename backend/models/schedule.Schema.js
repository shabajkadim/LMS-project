import mongoose, { Schema } from 'mongoose'

const scheduleSchema=new Schema({
    course:{
        type:String,
        require:true
    },
    instructor:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
    lecture:{
        type:String,
        require:true
    }
})

export default mongoose.model("schedule",scheduleSchema)
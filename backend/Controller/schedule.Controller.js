import scheduleSchema from "../models/schedule.Schema.js"

export const addSchedule=async(req,res)=>{
    // res.send("addschedule-page")
    try{
        // const {instructor,course,lecture,date}=req.body
        const {instructor,course,lecture,date}=req.body.scheduleData

        if(!instructor || !course || !lecture || !date){
            return res.status(404).json({success:false, message:"All feilds required"})
        }

        const existingSchedule = await scheduleSchema.findOne({
            date: date,
        });

        if (existingSchedule) {
            return res.status(409).json({ success: false, message: "This schedule already exists for the given date" });
        }

        const newSchedule=new scheduleSchema({
            instructor:instructor,
            course:course,
            lecture:lecture,
            date:date, // Convert date string to Date object
        })
        await newSchedule.save()
        return res.status(201).json({success:true, message:"New lecture-Time Add successfully"})
    }catch(error){

    }
}


export const getschedule=async(req,res)=>{
    try{
        const getlectures=await scheduleSchema.find({})

        res.status(201).json({success:true, getlectures:getlectures})
    }catch(error){
        res.status(500).json(error)
    }
}


import AddCourseSchema from "../models/AddCourse.Schema.js"

export const AddCourse=async(req,res)=>{
    try{
        // const {courseName,level,description,image}=req.body
        const {courseName,level,description,image}=req.body.courseData

        if(!courseName || !level || !description || !image){
            return res.status(404).json({success:false , message:"all feilds are required"})
        }


        const course=new AddCourseSchema({
            courseName:courseName,
            level:level,
            description:description,
            image:image
        })
        await course.save()
        return res.status(201).json({success:true, message:"course Add Successfull"})
    }catch(error){
        console.log(error);
        return res.status(500).json({error})
    }
}

export const getAllCourse=async(req,res)=>{
    try{
        const AllData=await AddCourseSchema.find({})

        return res.status(201).json({success:true , AllData:AllData})
    }catch(error){
        res.status(500).json({error})
    }
}
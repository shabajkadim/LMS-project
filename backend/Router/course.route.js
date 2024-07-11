import { Router } from "express";
import  {AddCourse, getAllCourse}  from "../Controller/AddCourse.Controller.js";
import { addSchedule, getschedule } from "../Controller/schedule.Controller.js";

const router=Router()
router.post('/add-course',AddCourse)
router.get('/get-course',getAllCourse)
router.post('/add-schedule',addSchedule)
router.get('/get-schedule',getschedule)

export default router
import { Router } from "express";
import  {AddCourse, getAllCourse}  from "../Controller/AddCourse.Controller.js";

const router=Router()
router.post('/add-course',AddCourse)
router.get('/get-course',getAllCourse)

export default router
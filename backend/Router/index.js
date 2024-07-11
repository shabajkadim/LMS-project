import { Router } from "express";
import AuthRoutes from './Auth.route.js'
import CourseRoutes from './course.route.js'


const router=Router()
router.use('/auth',AuthRoutes)
router.use('/admin',CourseRoutes)


export default router
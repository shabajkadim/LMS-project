import { Router } from "express";
import AuthRoutes from './Auth.route.js'

const router=Router()
router.use('/auth',AuthRoutes)


export default router
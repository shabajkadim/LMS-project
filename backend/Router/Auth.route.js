import { Router } from "express";
import { GetAllUser, getCurrentUser, Login, Register } from "../Controller/Auth.controller.js";


const router=Router()

router.post('/register',Register)
router.post('/login',Login)
router.post('/get-current-user',getCurrentUser)
router.get('/all-user',GetAllUser)

export default router 
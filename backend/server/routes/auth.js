import express from 'express';
import userController from '../controllers/userController'; 
import authCtrl from './../controllers/auth'
import {userSignupValidator } from './../validator';

const router = express.Router();



router.post("/signup", authCtrl.signup); 
router.post("/signin", authCtrl.signin);
router.post("/signout", authCtrl.signout);
router.param("userId", userController.userById)

export default router;

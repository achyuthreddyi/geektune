import express from 'express'
const router = express.Router()
import {authUser, registerUser, getUserProfile} from '../controllers/userController.js'
import { isSignedIn } from '../middleware/authMiddleware.js'



router.route('/login').post(authUser)
router.route('/').post(registerUser)
router.route('/profile').post(isSignedIn, getUserProfile)

export default router
import express from 'express'
const router = express.Router()
import {getAllSongs} from '../controllers/songControllers.js'

router.route('/').get(getAllSongs)

export default router
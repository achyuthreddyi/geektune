import express from 'express'
const router = express.Router()
import {getAllSongs, getSongById, getSongStream} from '../controllers/songControllers.js'

router.route('/').get(getAllSongs)
router.route('/:id').get(getSongById)
router.route('/songPlay/:id').get(getSongStream)

export default router
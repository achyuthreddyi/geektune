import Song from '../models/songModel.js'
import asyncHandler from 'express-async-handler'

//@desc   Fetch all the songs from the database
//@route  GET /api/songs
//@access Public
const getAllSongs = asyncHandler(async(req, res) =>{
  const songs = await Song.find({})
  res.status(200).json(songs)
})

export { getAllSongs}
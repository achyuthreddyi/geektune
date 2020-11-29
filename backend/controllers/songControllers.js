import Song from '../models/songModel.js'
import asyncHandler from 'express-async-handler'
import ms from 'mediaserver'


//@desc   Fetch all the songs from the database
//@route  GET /api/songs
//@access Public
const getAllSongs = asyncHandler(async(req, res) =>{
  const songs = await Song.find({})
  res.status(200).json(songs)
})

//@desc   Fetch song by id
//@route  GET /api/songs/:id
//@access Public
const getSongById = asyncHandler(async(req, res) =>{
  const songId = req.params.id
  const song = await Song.findById(songId)
  res.status(200).json(song)

})

//@desc   Stream the song
//@route  GET /api/songs/:id
//@access Public
const getSongStream = asyncHandler(async(req, res) =>{
  const songId = req.params.id
  

  if(songId){
    const song = await Song.findById(songId)
    // console.log(son);
    const mediaFile = song.songUrl
    ms.pipe(req, res, mediaFile)
  }
  
})





export { getAllSongs, getSongById, getSongStream}
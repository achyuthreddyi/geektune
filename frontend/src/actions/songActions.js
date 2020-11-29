import axios from 'axios'
import { 
  SONG_CURRENT_DETAILS_FAIL,
  SONG_CURRENT_DETAILS_REQUEST,
  SONG_CURRENT_DETAILS_SUCCESS,
  SONG_CURRENT_PLAY_FAIL,
  SONG_CURRENT_PLAY_REQUEST,
  SONG_CURRENT_PLAY_SUCCESS,
  SONG_LIST_FAIL, 
  SONG_LIST_REQUEST, 
  SONG_LIST_SUCCESS } from '../constants/songConstants'

export const listSongs = () => async(dispatch) => {
  try{
    dispatch( { type: SONG_LIST_REQUEST})
    const { data } = await axios.get('http://localhost:5000/api/songs')
    console.log('listing songs in songActions', data);
    dispatch({
      type: SONG_LIST_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: SONG_LIST_FAIL,
      payload: 'error loading the song from the database'
    })
   
  }
}

export const setSong = (songId) => async(dispatch) =>{
  try{
    dispatch( { type: SONG_CURRENT_PLAY_REQUEST})
    // const { data } = await axios.get('http://localhost:5000/api/songs')

    dispatch({
      type: SONG_CURRENT_PLAY_SUCCESS,
      payload: `http://localhost:5000/api/songs/songPlay/${songId}`
    })
  }catch(error){
    dispatch({
      type: SONG_CURRENT_PLAY_FAIL,
      payload: 'error loading the song from the database'
    })
   
  }
}
export const getSongDetails = (songId) => async(dispatch) =>{
  try{
    dispatch( { type: SONG_CURRENT_DETAILS_REQUEST})
    const {data} = await axios.get(`http://localhost:5000/api/songs/${songId}`)
    console.log('data in the getSongDetails', data);
   
    dispatch({
      type: SONG_CURRENT_DETAILS_SUCCESS,
      payload: data
    })
  }catch(error){
    dispatch({
      type: SONG_CURRENT_DETAILS_FAIL,
      payload: 'error loading the song details from the database'
    })
   
  }
}
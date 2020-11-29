import axios from 'axios'
import { SONG_LIST_FAIL, SONG_LIST_REQUEST, SONG_LIST_SUCCESS } from '../constants/songConstants'

export const listSongs = () => async(dispatch) => {
  try{
    dispatch( { type: SONG_LIST_REQUEST})
    const { data } = await axios.get('http://localhost:5000/api/songs')
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
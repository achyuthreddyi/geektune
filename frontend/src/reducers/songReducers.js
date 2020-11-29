import { SONG_LIST_FAIL, 
  SONG_LIST_REQUEST, 
  SONG_LIST_SUCCESS } from "../constants/songConstants";

export const songListReducer = (state = {songs: []}, action ) =>{
  switch(action.type){
    case SONG_LIST_REQUEST:
      return { loading: true}
    case SONG_LIST_SUCCESS:
      return { loading: false, songs: action.payload}
    case SONG_LIST_FAIL:
      return { loading: false , error: action.payload }
    default: 
      return state 
  }
}
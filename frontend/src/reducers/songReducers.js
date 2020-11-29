import { 
  SONG_CURRENT_DETAILS_FAIL,
  SONG_CURRENT_DETAILS_REQUEST,
  SONG_CURRENT_DETAILS_SUCCESS,
  SONG_CURRENT_PLAY_FAIL, 
  SONG_CURRENT_PLAY_REQUEST, 
  SONG_CURRENT_PLAY_SUCCESS, 
  SONG_LIST_FAIL, 
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
export const songCurrentPlaySet = (state = {songPlayUrl:'http://localhost:5000/api/songs/songPlay/5fc3f50262110d91584952b2'}, action ) =>{
  switch(action.type){
    case SONG_CURRENT_PLAY_REQUEST:
      return { loading: true}
    case SONG_CURRENT_PLAY_SUCCESS:
      return { loading: false, songPlayUrl: action.payload}
    case SONG_CURRENT_PLAY_FAIL:
      return { loading: false , error: action.payload }
    default: 
      return state 
  }
}

export const songCurrentDetails = (state = {}, action ) =>{
  switch(action.type){
    case SONG_CURRENT_DETAILS_REQUEST:
      return { loading: true}
    case SONG_CURRENT_DETAILS_SUCCESS:
      return { loading: false, songDetails: action.payload}
    case SONG_CURRENT_DETAILS_FAIL:
      return { loading: false , error: action.payload }
    default: 
      return state 
  }
}


import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { songCurrentDetails, songCurrentPlaySet, songListReducer } from './reducers/songReducers'

const reducer = combineReducers({
  songList: songListReducer,
  songCurrentPlay: songCurrentPlaySet,
  songCurrentDetails: songCurrentDetails
})


const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
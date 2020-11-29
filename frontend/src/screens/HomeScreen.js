import React , {useState, useEffect} from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import axios from 'axios'
import Song from '../components/Song/Song'
import { listSongs } from '../actions/songActions'
import { useDispatch, useSelector} from 'react-redux'



const HomeScreen = () => {

  const dispatch = useDispatch()
  
  const songList = useSelector(state => state.songList)
  const {songs } = songList

  useEffect(() => {
    dispatch(listSongs())
 
  }, [])
 

  return (
    <div>
      <h1>Home Screen</h1>  
      <Row>
        {songs && songs.length === 0 && <h1>No songs found </h1> }
        {songs && songs.map(song =>(
          <Col key={song._id} sm={12} md={6} lg={3} xlg={3} >
            <Song 
              song = {song}
            />
          </Col>
        ))}     
      </Row>  
 .
    </div>
  )
}

export default HomeScreen

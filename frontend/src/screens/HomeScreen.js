import React , {useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Song from '../components/Song/Song'



const HomeScreen = () => {

  const [songs, setSongs] = useState([])

  useEffect(() => {
    const getSong = async() =>{
      const {data} = await axios.get('http://localhost:5000/')
      setSongs(data)
      console.log('data of the song',data);
    }
    getSong()      

 
  }, [])
  console.log(songs);


  return (
    <div>
      <h1>Home Screen</h1>  
      <Row>
        {songs.length === 0 && <h1>No songs found </h1> }
        {songs.map(song =>(
          <Col key={song._id} sm={12} md={6} lg={3} xlg={3} >
             <Song 
            song = {song}
          />
          </Col>
        ))}
       
      </Row>  
 
    </div>
  )
}

export default HomeScreen

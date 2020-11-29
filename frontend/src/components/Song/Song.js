import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { setSong, getSongDetails } from '../../actions/songActions'
import { useDispatch, useSelector} from 'react-redux'

const Song = ({song}) => {
  const dispatch = useDispatch()

  // const [songId, setSongId] = useState('')

  const playSong = (songId) => {    
    dispatch(setSong(songId))
    dispatch(getSongDetails(songId))
  }


  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${song._id}`}>
        <Card.Img 
          variant="top" 
          src={ song.imageUrl } 
          style = {{width:'100%', height:'15vw', 
          }}
          variant='top'/>
               
      </Link>
      <Card.Body>
        <Link to={`/product/${song._id}`}>
        <Card.Title as ='div'> <strong>  { song.name } </strong></Card.Title>
                
        </Link>
        <Button 
          variant="primary"
          onClick = {() => playSong(song._id)}        
        >Play</Button>
      
        <Card.Text as= 'div'>
                      {/* <Rating 
                          value={ product.rating} 
                          text={`${product.numReviews} reviews `}                                            
                      /> */}
        </Card.Text>

      </Card.Body>
      
    </Card>
  )
}

export default Song

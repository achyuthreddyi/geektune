import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'

const Song = ({song}) => {
  const playSong = (id) => {
    console.log(id);

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
          onClick = {playSong(song._id)}        
        >Play</Button>
        <Card.Text as= 'div'>
                      {/* <Rating 
                          value={ product.rating} 
                          text={`${product.numReviews} reviews `}                                            
                      /> */}
        </Card.Text>

        {/* <Card.Text as= 'div'>
          &#x20B9; {product.price}
        </Card.Text> */}


      </Card.Body>
      
    </Card>
  )
}

export default Song

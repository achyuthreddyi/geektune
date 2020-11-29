import React, {useEffect, useState} from 'react'

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import axios from 'axios'

import "./Footer.css"
import { Grid, Slider } from '@material-ui/core';
// import { useDataLayerValue } from '../../context/DataLayer';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Footer( { spotify } ) {

    // const [ { token, item, playing }, dispatch ] = useDataLayerValue()
    const [song, setSong] = useState('')

    useEffect(() => {
      const getSong = async() =>{
        const {data} = await axios.get('http://localhost:5000/5fb25f29bed39fa8b1d8a723')
        setSong(data)
        console.log('data of the song',data);
      }
      getSong()      

   
    }, [])

    return (

        <div className="footer">
        <div className="footer__left">
          {/* <img
            className="footer__albumLogo"
            src={item?.album.images[0].url}
            alt={item?.name}
          /> */}
            <img className= "footer__albumLogo"
                src = {song.imageUrl}

                alt=""/>
          {song ? (
            <div className="footer__songInfo">
              <h4>{song.name}</h4>
              <p>{song.artist}</p>
            </div>
          ) : (
            <div className="footer__songInfo">
              <h4>No song is playing</h4>
              <p>...</p>
            </div>
          )}
        </div>
        <div className="footer__center">
          <AudioPlayer
            autoPlay
            src="http://localhost:5000/songPlay/5fb25f29bed39fa8b1d8a723"
            onPlay={e => console.log("onPlay")}
            // other props here
          />  

          
        </div>
        
        <div className="footer__right">
          <div>
          <SkipNextIcon/>
          <SkipPreviousIcon />
          

          </div>
          

          
        </div>
        
        
      </div>
  
       
    )
}

export default Footer
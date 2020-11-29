import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import "./Footer.css"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector  } from "react-redux";

function Footer() { 

  const songCurrentPlay = useSelector( state => state.songCurrentPlay)  
  const { songPlayUrl } = songCurrentPlay

  const songCurrentDetails = useSelector( state => state.songCurrentDetails)  
  const { songDetails } = songCurrentDetails

    return (

      <div className="footer">
      <div className="footer__left"> 
      {songDetails &&    <img className= "footer__albumLogo"
          src = {songDetails.imageUrl}

          alt=""/> }       
     
      {songDetails ? (
        <div className="footer__songInfo">
        <h4>{songDetails.name}</h4>
        <p>{songDetails.artist}</p>
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
        src={songPlayUrl}
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
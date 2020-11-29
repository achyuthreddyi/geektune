import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const HomeScreen = () => {
  return (
    <div>
      <h1>Home Screen</h1>    
      <AudioPlayer
          autoPlay
          src="http://localhost:5000/songPlay/5fb25f29bed39fa8b1d8a723"
          onPlay={e => console.log("onPlay")}
          // other props here
        />  
    </div>
  )
}

export default HomeScreen

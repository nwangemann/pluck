import React, { useState } from 'react';
import axios from "axios";
import { Player } from 'video-react';
import './Video.css'
import "../../node_modules/video-react/dist/video-react.css"; 


function Request (){
    const [currentVideo, setCurrentVideo] = useState('')
    axios.get('/api/getVideo').then(res => {
        setCurrentVideo(res)
    })
    return (
        <div>
              <Player
          playsInline
          poster="./pic.jpg"
          src={currentVideo}
        />
        </div>
        )
}

export default Request
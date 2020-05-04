import './Video.css'
import "../../node_modules/video-react/dist/video-react.css"; 
import React from 'react';
import { Player } from 'video-react';

function Video (props){
  return (
      <div>
        <Player
          playsInline
          poster="./pic.jpg"
          src={props.path}
        />
      </div>
  );
};

export default Video
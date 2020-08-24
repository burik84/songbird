import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './audio.css';


const AudioBlock=({srcAudio, classNames})=>{
    
    return(        
        <div className={classNames}>
            <ReactAudioPlayer
                src={srcAudio}
                controls
            />
        </div>
    )
}

export default AudioBlock;
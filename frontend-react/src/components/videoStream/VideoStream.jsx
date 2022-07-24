import React from 'react';
import './videoStream.css';

const VideoStream = () => {
  return (
    <div className='video-stream'>
        <div className="video-stream-card">
            <video className='video-card' src="http://localhost:9000/movie"  controls></video>
        </div>
        
    </div>
  )
}

export default VideoStream;
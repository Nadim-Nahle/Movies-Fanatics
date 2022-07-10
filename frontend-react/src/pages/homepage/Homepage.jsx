import React from 'react';
import './homepage.css';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="title">
            <h1>Movie Fanatics</h1>
        </div>
        <div className="desc">
            <h2>Discover what's hot and get recommendations<br></br>Connect and discuss your opinions with other users!</h2>
        </div>
        <div className="enter">
            <button className="enter-btn">Enter</button>
        </div>
    </div>
  )
}

export default Homepage;
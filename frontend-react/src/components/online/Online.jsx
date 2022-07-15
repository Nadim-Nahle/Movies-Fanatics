import React from 'react';
import './online.css';

const Online = () => {
  return (
    <div className="online">
        <div className="onlineFriend">
            <div className="onlineImgContainer">
                <img className='onlineImg' src="https:/i.imgur.com/oPj4A8u.jpg" alt="" />
                <div className="onlineBadge"></div>
            </div>
            <span className="onlineName">Nadim Nahle</span>
        </div>
    </div>
  )
}

export default Online;
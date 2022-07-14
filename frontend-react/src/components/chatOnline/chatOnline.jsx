import React from 'react';
import './chatOnline.css';

const chatOnline = () => {
  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img src="https:/i.imgur.com/oPj4A8u.jpg" alt="" />
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Nadim Nahle</span>
        </div>
    </div>
  )
}

export default chatOnline;
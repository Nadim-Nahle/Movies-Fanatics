import React from 'react';
import './message.css';

const Message = ({own}) => {
  return (
    <div className={own ? "message own" : "message"} >
        <div className="messageTop">
            <img
            className="messageImg"
            src="https:/i.imgur.com/oPj4A8u.jpg"
            alt=""
             />
            <p className="messageText">Hello this is a message</p>
        </div>
        <div className="messageBottom"></div>
    </div>
  )
}

export default Message
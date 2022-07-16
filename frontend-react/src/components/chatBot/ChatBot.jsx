import React, { useState } from 'react';
import './chatbot.css';
import botImage from '../../img/bot_image.jpg';

const ChatBot = () => {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [time, setTime] = useState(`${hours}:${minutes}:${seconds}`); //using the useState hook to get the data from the local time and set it to the time variable
    const [dateTime, setDateTime] = useState(`${days[day]}, ${day} ${months[month]} ${year}`); //using the useState hook to get the data from the local date and set it to the dateTime variable

  return (
    <div className="chatbot" >
      <div className="chatbot-wrapper">
        <div className="chatbot-content">
          <div className="chatbot-header">
            <div className="chatbot-img">
              <img src={botImage} alt="" />
            </div>
            <div className="chatbot-right">
              <div className="chatbot-name">ChatBot</div>
              <div className='chatbot-status'></div>
            </div>
          </div>
          <div className="chatbot-main">
            <div className="chatbot-main_content">
              <div className="chatbot-messages">
                <div className="chatbot-bot-message" id='message1'></div>
                <div className="chatbot-human-message" id='message2'></div>
              </div>
            </div>
          </div>
          <div className="chatbot-bottom">
            <div className="chatbot-btm">
                <div className="chatbot-input">
                  <input type="text" id='input' placeholder='Enter your message'/>
                </div>
                <div className="chatbot-btn">
                  <button >
                    <i className="fas fa-paper-plane"></i>
                    Send
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default ChatBot
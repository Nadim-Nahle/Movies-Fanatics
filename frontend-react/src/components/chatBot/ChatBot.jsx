import React from 'react'
import './chatbot.css'
import botImage from '../../img/bot_image.jpg'

const ChatBot = () => {
  return (
    <div className="chatbot">
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
import React from 'react';
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import chatOnline from '../../components/chatOnline/chatOnline';
import "./messenger.css";

const Messenger = () => {
  return (
    <>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder='search for friends' className='chatMenuInput' />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                    <Conversation />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                        <Message own={true}/>
                        <Message />
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className='chatMessageInput' placeholder='write something...'></textarea>
                        <button className='chatSubmitButton'>send</button>
                    </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <chatOnline />
                </div>
            </div>
        </div>
    </>
  )
}

export default Messenger
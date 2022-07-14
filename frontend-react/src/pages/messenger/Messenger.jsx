import React from 'react';
import "./messenger.css";

const Messenger = () => {
  return (
    <>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder='search for friends' className='chatMenuInput' />
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">box</div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">wrapper</div>
            </div>
        </div>
    </>
  )
}

export default Messenger
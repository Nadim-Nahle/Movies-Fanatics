import React, { useEffect, useState } from 'react';
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import chatOnline from '../../components/chatOnline/chatOnline';
import "./messenger.css";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Messenger = () => {

    const [conversations, setConversations] = useState([]);

    const { auth } = useAuth();
    const user = (auth.user);

    useEffect(()=>{
        const getConversations = async () => {
            try{
                const res = await axios.get(`/api/v1/auth/conv/${user._id}`)
                console.log(res)
            }catch(error){
                console.log(error)
            }
        }
        getConversations();
    },[user._id]);
    
  return (
    <>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder='search for friends' className='chatMenuInput' />
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
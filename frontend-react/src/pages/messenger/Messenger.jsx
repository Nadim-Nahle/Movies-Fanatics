import React, { useEffect, useState } from 'react';
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import chatOnline from '../../components/chatOnline/chatOnline';
import "./messenger.css";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const Messenger = () => {

    const [conversations, setConversations] = useState([]);

    const [cookies ] = useCookies(['user'])
    const user = cookies?.user;
    

    useEffect(()=>{
        const getConversations = async () => {
            try{
                const res = await axios.get(`/api/v1/auth/conv/${user._id}`)
                setConversations(res.data);
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
                    {conversations.map((c) => (
                        <Conversation conversation={c} currentUser={user}/>
                    ))}
                    
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
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Messenger
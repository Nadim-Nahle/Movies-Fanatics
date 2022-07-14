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
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);

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
    
    useEffect(()=>{
        const getMessages = async () =>{
            try {
                const res = await axios.get(`/api/v1/auth/conv/${currentChat?._id}`)
                
                setMessages(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getMessages();
    },[currentChat])
  return (
    <>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input type="text" placeholder='search for friends' className='chatMenuInput' />
                    {conversations.map((c) => (
                        <div onClick={()=>setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={user}/>
                        </div>                       
                    ))}
                    
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {
                        currentChat ?
                        <>
                        
                    
                    <div className="chatBoxTop">
                        {messages.map((m)=>(
                            <Message message={m} own={m.sender === user._id}/>
                        ))}
                        
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className='chatMessageInput' placeholder='write something...'></textarea>
                        <button className='chatSubmitButton'>send</button>
                    </div>
                    </> : (
                    <span className='noConversationText'> open a converstaions to start a chat</span>
                    )
                }
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
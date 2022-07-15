import React, { useEffect, useRef, useState } from 'react';
import Conversation from '../../components/conversations/Conversation';
import Message from '../../components/message/Message';
import "./messenger.css";
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Online from '../../components/online/Online';

const Messenger = () => {

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const scrollRef = useRef();

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
                const res = await axios.get(`/api/v1/auth/msg/${currentChat?._id}`)
                
                setMessages(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getMessages();
    },[currentChat])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        try {
            const res = await axios.post('/api/v1/auth/newmsg', message);
            setMessages([...messages, res.data])
            setNewMessage('');
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    },[messages])


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
                            <div ref={scrollRef}>
                                <Message message={m} own={m.sender === user._id}/>
                            </div>
                            
                        ))}
                        
                    </div>
                    <div className="chatBoxBottom">
                        <textarea 
                            className='chatMessageInput' 
                            placeholder='write something...' 
                            onChange={(e)=>setNewMessage(e.target.value)} 
                            value={newMessage}>
                        </textarea>
                        <button className='chatSubmitButton' onClick={handleSubmit}>send</button>
                    </div>
                    </> : (
                    <span className='noConversationText'> open a converstaions to start a chat</span>
                    )
                }
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">
                    <Online />
                </div>
            </div>
        </div>
    </>
  )
}

export default Messenger
import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './swipe.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';



const Swipe = () => {
    const [users, setUsers] = useState(null);
    const [user, setUser ] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [lastDirection, setLastDirection] = useState();
    const [id, setId] = useState();

    const userId = cookies?.userId;

    const getUser = async () =>{
        try{
            const response = await axios.get(`/api/v1/auth/user/${userId}`);
            setUser(response?.data)
            //console.log(response.data)
        }catch(err){

        }
    }
    const getUsers = async () =>{
        try{
            const response = await axios.get(`/api/v1/auth/users`);
            setUsers(response?.data)
            //console.log(response.data[0]._id)
        }catch(err){

        }
    }

    useEffect(()=>{
        getUsers()
        getUser()
    },[users,user])

    //console.log('user',user)

    const updateMatches = async (matchedUserId) =>{

        try{
         const response = await axios.put(`/api/v1/auth/user/${matchedUserId}/follow`,({userId}));
         console.log(response)
         getUser();
        }catch(error){
            //console.log(error)
        }
    }

    const swiped = (direction, swipedUserId) => {
    
        if (direction === 'right'){
            updateMatches(swipedUserId)
        }
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    //console.log(name + ' left the screen!')
  }

 

  
  return (
    <>

    
    <div className='dashboard'>
        <div className="following">
            <div className="user-name">
             <h3>{user?.name}</h3>
         </div>
            <div className="user-matches">
                <div className="user-matches-title">
                    <h3>Followings</h3>
                    
                </div>
                <div className="user-matches-content">
                    <h4></h4>
                </div>
            </div>
        </div>
        <div className="swipe-container">
            <div className="card-container">

            {users?.map((user) =>
            <TinderCard className='swipe' 
            key={user._id} 
            onSwipe={(dir) => swiped(dir, user._id)} 
            onCardLeftScreen={() => outOfFrame(user.name)}>
            <div style={{ backgroundImage: 'url(' + user.url + ')' }} 
                className='card'
            ><h3>{user.name}</h3>
            
            </div>
          </TinderCard>
        )}
        <div className='swipe-info'>
                {lastDirection ? <p> You swiped {lastDirection}</p> : <p/>}
        </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default Swipe
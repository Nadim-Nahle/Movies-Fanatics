import React, { useEffect, useState } from 'react'
import TinderCard from 'react-tinder-card'
import './swipe.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const db = [
    {
      name: 'Richard Hendricks',
      url: 'https:/i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: 'https:/i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Monica Hall',
      url: 'https:/i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Jared Dunn',
      url: 'https:/i.imgur.com/oPj4A8u.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: 'https:/i.imgur.com/oPj4A8u.jpg'
    }
  ]

const Swipe = () => {
    const [users, setUsers] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    const userId = cookies?.userId;

    const getUsers = async () =>{
        try{
            const response = await axios.get(`/api/v1/auth/users`);
            setUsers(response?.data)
            //console.log(response.data[0].name)
        }catch(err){

        }
    }

    useEffect(()=>{
        getUsers()
    },[users])

    console.log('users',users)


    const characters = db
    const [lastDirection, setLastDirection] = useState()

    const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div className='dashboard'>
        <div className="swipe-container">
            <div className="card-container">

            {characters.map((character) =>
            <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} 
                className='card'
                >
                    <h3>{character.name}</h3>
                </div>
          </TinderCard>
        )}
        <div className='swipe-info'>
                {lastDirection ? <p> You swiped {lastDirection}</p> : <p/>}
        </div>

            </div>
        </div>
    </div>
  )
}

export default Swipe
import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import './swipe.css';

const db = [
    {
      name: 'Richard Hendricks',
      url: './img/richard.jpg'
    },
    {
      name: 'Erlich Bachman',
      url: './img/erlich.jpg'
    },
    {
      name: 'Monica Hall',
      url: './img/monica.jpg'
    },
    {
      name: 'Jared Dunn',
      url: './img/jared.jpg'
    },
    {
      name: 'Dinesh Chugtai',
      url: './img/dinesh.jpg'
    }
  ]

const Swipe = () => {

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
        <div className="swiper-container">
            <div className="card-container">

            {characters.map((character) =>
            <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
                    <h3>{character.name}</h3>
                </div>
          </TinderCard>
        )}
            </div>
        </div>
    </div>
  )
}

export default Swipe
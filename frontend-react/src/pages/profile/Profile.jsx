import React, { useState } from 'react'
import './profile.css'


const Profile = () => {
    const name = (localStorage.getItem('name'))
    const username = (localStorage.getItem('username'))
    const email = (localStorage.getItem('email'))
    const url = (localStorage.getItem('url'))

    
  return (
    <>
      
      <div className="wrapper">
    <div className="left">
        <img src={url ? url : 'https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg' } alt="user" width="100"/>
        <h4>{name}</h4>
    </div>
    <div className="right">
        <div className="info">
            <h4><button className='follow-btn'>follow</button></h4>
            <h3>Information</h3>
            <div className="info_data">
                 <div className="data">
                    <h4>Email</h4>
                    <p>{email}</p>
                 </div>
                 <div className="data">
                   <h4>username</h4>
                    <p>{username}</p>
              </div>
            </div>
        </div>
      
      <div className="projects">
            <h3>activity</h3>
            <div className="projects_data">
                 <div className="data">
                    <h4>Following</h4>
                    <p>private</p>
                 </div>
                 <div className="data">
                   <h4>Followers</h4>
                    <p>private</p>
              </div>
            </div>
        </div>
      
    </div>
</div>
    </>
  )
}

export default Profile
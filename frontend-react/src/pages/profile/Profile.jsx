import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import './profile.css'


const Profile = () => {
    const { auth } = useAuth();
    const name = (auth?.user?.name)
    const username = (auth?.user?.username)
    const email = (auth?.user?.email)
    const pic = (auth?.user?.pic)

  return (
    <>
      
      <div className="wrapper">
    <div className="left">
        <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"/>
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
      
        <div className="social_media">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
      </div>
    </div>
</div>
    </>
  )
}

export default Profile
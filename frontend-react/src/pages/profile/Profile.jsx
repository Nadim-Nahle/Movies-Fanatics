import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const name = localStorage.getItem("name");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const url = localStorage.getItem("url");

  return (
    <div className="profile-page">

    
    <div className="profile">
      <div className="left-profile">
        <div className="left-content">
          <img className="profile-pic" src={url?url : require("../../img/noAvatar.png") } alt='profile-pic'/>
          <h3>{name}</h3>
          <h3 className="profile-email">{email}</h3>
          <h3>{username}</h3>
        </div>
      </div>
      <div className="right-profile">
      <>
   
   <div class="bg_img"></div>
<div class="form_wrapper">
 <div class="form_container">
   <div class="title_container">
     <h2>Edit Your Profile</h2>
   </div>
   <form>
     <div class="row clearfix">
       <div class="col_half">
         <label>Full Name</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
           <input type="text" name="first_name" placeholder="John" required />
         </div>
       </div>
       <div class="col_half">
         <label>User Name</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
           <input type="text" name="last_name" placeholder="Doe" />
         </div>
       </div>
     </div>
     <div class="row clearfix">
       <div class="col_half">
         <label>Email</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
           <input type="email" name="email" placeholder="johndoe@gmail.com" required />
         </div>
       </div>
       <div class="col_half">
         <label>Phone</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-phone"></i></span>
           <input type="tel" name="phone" placeholder="Phone no" pattern="[0-9]{10}" />
         </div>
       </div>
     </div>
     <div class="row clearfix">
       <div class="col_half">
         <label>Country</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-globe"></i></span>
           <input type="email" name="email" placeholder="johndoe@gmail.com" required />
         </div>
       </div>
       <div class="col_half">
         <label>City</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-map-marker"></i></span>
           <input type="tel" name="phone" placeholder="Phone no" pattern="[0-9]{10}" />
         </div>
       </div>
     </div>
     <div class="row clearfix">
     </div>
     <div className="form-btn">
        <button className="profile-btn">Save Profile</button>
     </div>
     
   </form>
 </div>
</div>
</>
      </div>
    </div>
    </div>
  );
};

export default Profile;

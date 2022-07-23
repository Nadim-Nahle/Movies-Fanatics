import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./profile.css";

const Profile = () => {
  const [name, setName] = useState(localStorage.getItem('name'));
  const [username, setUserame] = useState(localStorage.getItem('username'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [url, setUrl] = useState(localStorage.getItem('url'));
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  const [cookies] = useCookies(["user"]);
  const user = cookies?.user;
  const AuthToken = cookies?.AuthToken;

  


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`/api/v1/auth/user/update/${user._id}`,{name,email,username,country,city,phoneNumber});
      console.log(response.data)
    } catch (error) {
      console.log(error.response)
      console.log(user._id)
    }
  }

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
   <form onSubmit={handleSubmit}>
     <div class="row clearfix">
       <div class="col_half">
         <label>Full Name</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
           <input type="text" name="first_name" placeholder="John" onChange={(e) => setName(e.target.value)}/>
         </div>
       </div>
       <div class="col_half">
         <label>User Name</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
           <input type="text" name="last_name" placeholder="Doe" onChange={(e) => setUserame(e.target.value)}/>
         </div>
       </div>
     </div>
     <div class="row clearfix">
       <div class="col_half">
         <label>Email</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
           <input type="email" name="email" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
         </div>
       </div>
       <div class="col_half">
         <label>Phone</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-phone"></i></span>
           <input type="tel" name="phone" placeholder="Phone no" pattern="[0-9]{10}" onChange={(e) => setPhoneNumber(e.target.value)}/>
         </div>
       </div>
     </div>
     <div class="row clearfix">
       <div class="col_half">
         <label>Country</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-globe"></i></span>
           <input type="text" name="email" placeholder="Lebanon" onChange={(e) => setCountry(e.target.value)}/>
         </div>
       </div>
       <div class="col_half">
         <label>City</label>
         <div class="input_field"> <span><i aria-hidden="true" class="fa fa-map-marker"></i></span>
           <input type="tel" name="phone" placeholder="City" onChange={(e) => setCity(e.target.value)} />
         </div>
       </div>
     </div>
     <div class="row clearfix">
     </div>
     <div className="form-btn">
        <button className="profile-btn" type="submit">Save Profile</button>
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

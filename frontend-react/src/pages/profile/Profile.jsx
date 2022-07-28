import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import useAuth from "../../hooks/useAuth";
import "./profile.css";
import missing from '../../img/noAvatar.png';

const Profile = () => {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [username, setUserame] = useState(localStorage.getItem("username"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [url, setUrl] = useState(localStorage.getItem("url"));
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const { setAuth } = useAuth();

  const [response, setResponse] = useState("");

  const user = cookies?.user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `/api/v1/auth/user/update/${user._id}`,
        { name, email, username, country, city, phoneNumber }
      );
      localStorage.setItem('name',response.data.data.name)
      localStorage.setItem('username',response.data.data.username)
      localStorage.setItem('email',response.data.data.email)
      setResponse("Profile Updated");
      
    } catch (error) {
      setResponse("Network Error");
    }
  };

  const handleLogout = () => {
    setAuth({});
    removeCookie("user");
    setAuth({});
  };

  return (
    <div className="profile-page">
      <div className="profile">
        
        <div className="left-profile">
          <div className="left-content">
            <div className="pic-content">
              <div className="btnimg">
                <img
                  className="profile-pic"
                  src={url ? url : missing}
                  alt="profile-pic"
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <input type="file"></input>
            </div>

            <h3>{name}</h3>
            <h3 className="profile-email">{email}</h3>
            <h3>{username}</h3>
            
          </div>
          
          
       
        </div>
        
        <div className="right-profile">
          <>
            <div className="bg_img"></div>
            <div className="form_wrapper">
              <div className="form_container">
                <div className="title_container">
                  <h2>Edit Your Profile</h2>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="row clearfix">
                    <div className="col_half">
                      <label className="profile-label">Full Name</label>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user"></i>
                        </span>
                        <input
                          type="text"
                          name="first_name"
                          placeholder={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col_half">
                      <label className="profile-label">User Name</label>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-user"></i>
                        </span>
                        <input
                          type="text"
                          name="last_name"
                          placeholder={username}
                          onChange={(e) => setUserame(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col_half">
                      <label className="profile-label">Email</label>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          name="email"
                          placeholder={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col_half">
                      <label className="profile-label">Phone</label>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-phone"></i>
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone no"
                          pattern="[0-9]{10}"
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="col_half">
                      <label className="profile-label">Country</label>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i aria-hidden="true" className="fa fa-globe"></i>
                        </span>
                        <input
                          type="text"
                          name="email"
                          placeholder="Lebanon"
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col_half">
                      <label className="profile-label">City</label>
                      <div className="input_field">
                        {" "}
                        <span>
                          <i
                            aria-hidden="true"
                            className="fa fa-map-marker"
                          ></i>
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="City"
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row clearfix"></div>
                  <div className="form-btn">
                    <button className="profile-btn" type="submit">
                      Save Profile
                    </button>
                    <p className="res">{response}</p>
                  </div>
                </form>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Profile;

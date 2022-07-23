import React, { useState } from "react";
import "./profile.css";

const Profile = () => {
  const name = localStorage.getItem("name");
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const url = localStorage.getItem("url");

  return (
    <div className="profile">
      <div className="left-profile">
        left
      </div>
      <div className="right-profile">
        <form className="profile-form">
          <div className="left-form">
            <input type="text" />
            <input type="text" />
          </div>
          <div className="right-form">
            <input type="text" />
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

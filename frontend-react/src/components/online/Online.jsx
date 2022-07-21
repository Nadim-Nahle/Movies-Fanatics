import axios from "axios";
import React, { useEffect, useState } from "react";
import "./online.css";

const Online = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(`/api/v1/auth/user/friends/${currentId}`);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.inculdes(f._id)));
  }, [friends, onlineUsers]);

  return (
    <div className="online">
      <div className="onlineFriend">
        <div className="onlineImgContainer">
          <img
            className="onlineImg"
            src="https:/i.imgur.com/oPj4A8u.jpg"
            alt=""
          />
          <div className="onlineBadge"></div>
        </div>
        <span className="onlineName">omar</span>
      </div>
    </div>
  );
};

export default Online;

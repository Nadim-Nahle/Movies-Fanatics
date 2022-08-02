import axios from "axios";
import React, { useEffect, useState } from "react";
import "./online.css";
import missing from "../../img/noAvatar.png";

const Online = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get(`/api/v1/auth/user/friends/${currentId}`);
        setFriends(res.data);
        console.log("friends", res.data);
      } catch (error) {
        console.log(error.response);
        console.log(currentId);
      }
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f?._id)));
  }, [friends, onlineUsers]);

  return (
    <div className="online">
      {onlineFriends?.map((friend) =>
        friend?.name ? (
          <div className="onlineFriend" key={friend?._id}>
            <div className="onlineImgContainer">
              <img
                className="onlineImg"
                src={friend?.favMovieUrl ? friend?.favMovieUrl : missing}
                alt=""
              />
              <div className="onlineBadge"></div>
            </div>
            <span className="onlineName">
              {friend?.name ? friend?.name : "No Name"}
            </span>
          </div>
        ) : null
      )}
    </div>
  );
};

export default Online;

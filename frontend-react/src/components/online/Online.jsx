import axios from "axios";
import React, { useEffect, useState } from "react";
import "./online.css";
import persona1 from "../../img/persona1.jpg";
import nadim from "../../img/nadim.jpg";

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

  return (
    <div className="online">
      {friends.map((friend) =>
        friend?.name ? (
          <div className="onlineFriend" key={friend._id}>
            <div className="onlineImgContainer">
              <img
                className="onlineImg"
                src={friend?.favMovieUrl ? friend?.favMovieUrl : null}
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

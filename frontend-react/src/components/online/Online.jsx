import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import "./online.css";
import missing from "../../img/noAvatar.png";

const Online = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get(`/user/friends/${currentId}`);
        setFriends(res.data);
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

  const newConv = async (onlineUser) => {
    try {
      const response = await axios.post(`/newconv`, {
        senderId: currentId,
        receiverId: onlineUser._id,
      });
    } catch (err) {}
  };

  const handleClick = async (onlineUser) => {
    try {
      const response = await axios.get(`/convs/${currentId}/${onlineUser._id}`);
      console.log(response);
      if (!response.data) {
        newConv(onlineUser);
        handleClick(onlineUser);
      } else setCurrentChat(response.data);
    } catch (err) {}
  };

  return (
    <div className="online">
      {onlineFriends?.map((friend) =>
        friend?.name ? (
          <div
            className="onlineFriend"
            key={friend?._id}
            onClick={() => {
              handleClick(friend);
            }}
          >
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

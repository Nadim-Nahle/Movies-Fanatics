import React, { useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";

const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation?.members?.find((m) => m !== currentUser?._id);

    const getUser = async () => {
      try {
        const res = await axios.get(`/api/v1/auth/user?userId=${friendId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        alt=""
        className="conversationImg"
        src={
          user?.url
            ? user?.url
            : "https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg"
        }
      />
      <span key={conversation?._id} className="conversationName">{user?.name}</span>
    </div>
  );
};

export default Conversations;

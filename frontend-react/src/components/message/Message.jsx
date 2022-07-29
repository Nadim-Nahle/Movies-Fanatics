import React from "react";
import "./message.css";
import { format } from "timeago.js";
import noavatar from "../../img/noAvatar.png";

const Message = ({ message, own }) => {
  const url = localStorage.getItem("url");

  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img className="messageImg" own src={own ? url : noavatar} alt="" />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;

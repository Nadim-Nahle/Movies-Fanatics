import React from "react";
import { useNavigate } from "react-router";
import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/movies");
  };
  return (
    <div className="homepage">
      <div className="homepage-content">
        <div className="title">
          <h1>Movie Fanatics</h1>
        </div>
        <div className="desc">
          <h2>
            Discover what's hot and get recommendations<br></br>Connect and
            discuss your opinions with other users!
          </h2>
        </div>
        <div className="enter">
          <button className="enter-btn" onClick={handleClick}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

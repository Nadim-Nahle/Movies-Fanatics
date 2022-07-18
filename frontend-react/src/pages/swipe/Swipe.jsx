import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./swipe.css";
import axios from "axios";
import { useCookies } from "react-cookie";

const Swipe = () => {
  const [users, setUsers] = useState(null);
  const [user, setUser] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);
  const [lastDirection, setLastDirection] = useState();

  const userId = cookies?.userId;
  const name = localStorage.getItem('name')

  const getUser = async () => {
    try {
      const response = await axios.get(`/api/v1/auth/user/id/${userId}`);
      setUser(response?.data);
      //console.log(response.data)
    } catch (err) {}
  };
  const getUsers = async () => {
    try {
      const response = await axios.get(`/api/v1/auth/users`);
      setUsers(response?.data);
      //console.log(response.data[0]._id)
    } catch (err) {}
  };

  useEffect(() => {
    getUser()

}, [])

useEffect(() => {
    if (user) {
        getUsers()
    }
}, [user])

  //console.log('user',user)

  const followUser = async (followedUserId) => {
    try {
      const response = await axios.put(
        `/api/v1/auth/user/${followedUserId}/follow`,
        { userId }
      );
      
      getUser();
    } catch (error) {
      //console.log(error)
    }
  };

  const swiped = (direction, swipedUserId) => {
    if (direction === "right") {
      followUser(swipedUserId);
    }
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    //console.log(name + ' left the screen!')
  };

  const followedUserIds = user?.data?.followings.map((m)=>(m)).concat(userId)
  const newFollowedUserIds = user?.data?.followings.map((m)=>(m))

  const filteredUsers = users?.filter(
    newUser => !followedUserIds.includes(newUser._id)
  )
  const followedUsers = users?.filter(
    newUser => newFollowedUserIds.includes(newUser._id)
  )


    

  return (
    <di>
      <div className="dashboard-title">
        <h1>Swipe right to follow a user</h1>
      </div>

      <div className="dashboard">
        <div className="following">
          <div className="user-name">
            <h3>{name}</h3>
          </div>
          <div className="user-matches">
            <div className="user-matches-title">
              <h3>Followings</h3>
            </div>
            <div className="user-matches-content">
            {followedUsers?.map((user) => (
              <h4>
                {user.name}
              </h4>
            ))}
              
            </div>
          </div>
        </div>
        <div className="swipe-container">
          <div className="card-container">
            {filteredUsers?.map((user) => (
              <TinderCard
                className="swipe"
                key={user._id}
                onSwipe={(dir) => swiped(dir, user._id)}
                onCardLeftScreen={() => outOfFrame(user.name)}
              >
                <div
                  style={{ backgroundImage: "url(" + user.favMovieUrl + ")" }}
                  className="card"
                >
                  <h3>{user.name}</h3>
                </div>
              </TinderCard>
            ))}
            <div className="swipe-info">
              {lastDirection ? <p> You swiped {lastDirection}</p> : <p />}
            </div>
          </div>
        </div>
      </div>
    </di>
  );
};

export default Swipe;

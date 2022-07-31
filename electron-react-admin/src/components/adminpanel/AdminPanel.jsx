import React, { useEffect, useState } from "react";
import "./adminPanel.css";
import axios from "axios";

const DELETE_URL = "/api/v1/auth/user/delete";
const USER_URL = "/api/v1/auth/users";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await axios.get(USER_URL);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  async function deleteUser(id) {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);
    console.log(id);
    try {
      const response = axios.delete(`${DELETE_URL}/${id}`, {
        headers: { Authorization: "Bearer " + jwt },
      });
      getUsers();
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Fav Movie</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user._id}>
              <td>{user?.name}</td>
              <td>{user?.username}</td>
              <td>{user?.favMovie}</td>
              <td>{user?.email}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteUser(user?._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPanel;

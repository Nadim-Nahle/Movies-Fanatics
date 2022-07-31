import React, { useEffect, useState } from "react";
import "./adminPanel.css";
import axios from "axios";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/users");
      console.log(data);
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="app-container">
      <form>
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
                <td>jhon doe</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default AdminPanel;

import React, { useEffect, useRef, useState } from "react";
import axios from "../../api/axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUserame] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [name, email, password, username]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(REGISTER_URL, {
        name,
        username,
        email,
        password,
        url: image,
      });

      setName("");
      setEmail("");
      setPassword("");
      setUserame("");
      navigate("/login");
    } catch (err) {
      setErrMsg(err.response.data.errors[0].msg);

      errRef.current.focus();
    }
  };

  const uploadImage = (e) => {
    const files = e.target.files;
    const file = files[0];
    getBased64(file);
  };

  const onLoad = (fileString) => {
    setImage(fileString);
  };

  const getBased64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="body">
        <div className="login">
          <p ref={errRef} className="login__title1" aria-live="assertive">
            {errMsg}
          </p>
          <h1 className="login__title">Sign Up</h1>

          <div className="login__group">
            <input
              className="login__group__input"
              type="text"
              placeholder="Full Name"
              ref={userRef}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="login__group">
            <input
              className="login__group__input"
              type="text"
              placeholder="Username"
              ref={userRef}
              onChange={(e) => setUserame(e.target.value)}
              value={username}
            />
          </div>
          <div className="login__group">
            <input
              className="login__group__input"
              type="text"
              placeholder="Email"
              ref={userRef}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="login__group">
            <input
              className="login__group__input"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="login__group">
            <input
              className="login__group__input"
              type="file"
              onChange={uploadImage}
            />
          </div>
          <button className="login__sign-in" type="submit">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;

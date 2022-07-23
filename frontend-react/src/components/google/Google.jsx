import React, { useEffect, useRef, useState } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import { useCookies } from "react-cookie";
import "./google.css";

const REGISTER_URL = "/api/v1/auth/register/google";
const LOGIN_URL = "/api/v1/auth/login/google";

const Google = () => {
  const { setAuth } = useAuth();

  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  function handleCallBackResponse(response) {
    var userObject = jwt_decode(response.credential);

    localStorage.setItem("fullName", userObject.name);
    localStorage.setItem("email1", userObject.email);
    localStorage.setItem(
      "username1",
      `${userObject.given_name}_${userObject.family_name}`
    );
    localStorage.setItem("url1", userObject.picture);

    googleRegister();
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_API_KEY,
      callback: handleCallBackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  const googleRegister = async () => {
    const name = localStorage.getItem("fullName");
    const email = localStorage.getItem("email1");
    const username = localStorage.getItem("username1");
    const url = localStorage.getItem("url1");

    try {
      const response = await axios.post(REGISTER_URL, {
        name,
        username,
        email,
        url,
      });
      console.log(response.data);
      googleLogin();
    } catch (error) {
      console.log(error);
      googleLogin();
    }
  };

  const googleLogin = async () => {
    const email = localStorage.getItem("email1");

    try {
      const response = await axios.post(LOGIN_URL, {
        email,
      });
      console.log(response.data);
      const user = response?.data?.user;
      const accessToken = response?.data?.secret_token;
      localStorage.setItem("email", response.data.user.email);
      localStorage.setItem("userId", response.data.user._id);
      localStorage.setItem("name", response.data.user.name);
      localStorage.setItem("url", response.data.url);
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("AuthToken", accessToken);
      setCookie("user", response.data.user);
      setCookie("Email", response.data.user.email);
      setCookie("userId", response.data.user._id);
      setCookie("AuthToken", accessToken);

      setAuth({ user });
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error.response);
      setErrMsg("Email Already Exists");
      errRef.current.focus();
    }
  };

  return (
    <>
      <div id="signInDiv" className="google-login"></div>
      <div className="google-login">
        <p ref={errRef} className="login__title1" aria-live="assertive">
          {errMsg}
        </p>
      </div>
    </>
  );
};

export default Google;

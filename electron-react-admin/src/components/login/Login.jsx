import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const videoRef = useRef(null);
  const photoRef = useRef(null);

  const [base64, setBase64] = useState("");
  const [hasPhoto, setHasPhoto] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const getCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;
    setBase64(photo.toDataURL());

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
    setErrMsg("");
  };

  useEffect(() => {
    getCamera();
  }, [videoRef]);

  const faceVerification = async () => {
    try {
      const { data } = await axios.post("/api/v1/auth/login/admin", {
        photo: base64,
      });
      localStorage.setItem("jwt", data.secret_token);
      navigate("/adminpanel");
    } catch (err) {
      console.log(err);
      setErrMsg("Not An Admin");
    }
  };
  return (
    <>
      <div className="camera">
        <video ref={videoRef}></video>
        <button className="photo-btn" onClick={takePhoto}>
          Take a Picture!
        </button>
        <h1>{errMsg}</h1>
      </div>
      <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
        <canvas ref={photoRef}></canvas>
        <button onClick={faceVerification}>Verify</button>
      </div>
    </>
  );
};

export default Login;

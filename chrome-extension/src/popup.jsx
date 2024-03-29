import React, { useState } from "react";
import { render } from "react-dom";
import "./popup.css";
import axios from "axios";

function Popup() {
  const [link, setLink] = useState("");
  let keySlice = link.split("=");
  let key = keySlice[1];
  console.log(key);

  const options = {
    method: "GET",
    url: `https://youtube-downloader9.p.rapidapi.com/${key}/videoandaudio`,
    headers: {
      "X-RapidAPI-Key": "1f947199c7msh3bc6fd219522000p1bd19cjsn318d2499f463",
      "X-RapidAPI-Host": process.env.REACT_APP_RapidAPI_Key,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.request(options);
      const link = response.data;
      window.open(link[0]?.url, "_blank");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="form-download" onSubmit={handleSubmit}>
        <label htmlFor="">
          <h2>Enter A Youtube Link</h2>
        </label>
        <input
          type="text"
          placeholder="link"
          onChange={(e) => setLink(e.target.value)}
        />
        <div className="btn">
          <button className="download-btn" type="submit">
            Download
          </button>
        </div>
      </form>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));

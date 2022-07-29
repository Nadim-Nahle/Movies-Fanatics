import React from "react";
import axios from "axios";
import "./youtubeDownloader.css";

const YoutubeDownloader = ({ videoId }) => {
  const options = {
    method: "GET",
    url: `https://youtube-downloader9.p.rapidapi.com/${videoId}/videoandaudio`,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RapidAPI_Key,
      "X-RapidAPI-Host": "youtube-downloader9.p.rapidapi.com",
    },
  };

  const getDownloads = async () => {
    try {
      const response = await axios.request(options);
      const link = response.data;
      window.open(link[0]?.url, "_blank");
    } catch (error) {}
  };

  return (
    <button className="download-btn" onClick={getDownloads}>
      Download
    </button>
  );
};

export default YoutubeDownloader;

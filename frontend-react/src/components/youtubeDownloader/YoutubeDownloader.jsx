import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const YoutubeDownloader = ({videoId}) => {
    const navigate = useNavigate();

    const [downloadLink, setDownloadLink] = useState('');
    const options = {
        method: 'GET',
        url: 'https://youtube-dl4.p.rapidapi.com/',
        params: {url: `https://www.youtube.com/watch?v=${videoId}`},
        headers: {
          'X-RapidAPI-Key': '1f947199c7msh3bc6fd219522000p1bd19cjsn318d2499f463',
          'X-RapidAPI-Host': 'youtube-dl4.p.rapidapi.com'
        }
      };

    const getDownloads = async () => {
        try {
            const response = await axios.request(options)
            const link =(response.data);
            console.log(link.url)
            window.open(link.url, "_blank")
            
            
            
                   
            
        } catch (error) {
            console.log(error)
        }
    }
    

    
                           
  return (
    <div>        
        <button onClick={getDownloads}>Download</button>
    </div>
  )
}

export default YoutubeDownloader;
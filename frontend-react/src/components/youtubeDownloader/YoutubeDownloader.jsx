import React from 'react';
import axios from 'axios';
import './youtubeDownloader.css'

const YoutubeDownloader = ({videoId}) => {

    
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
            window.open(link.url, "_blank")
            
            
            
                   
            
        } catch (error) {
            console.log(error)
        }
    }
    

    
                           
  return (
           
        <button className='download-btn' onClick={getDownloads}>Download</button>
    
  )
}

export default YoutubeDownloader;
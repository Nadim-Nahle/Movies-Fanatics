import React, { useState } from 'react';
import { render } from 'react-dom';
import './popup.css'

function Popup() {

    const [link, setLink ] = useState('');
    console.log(link)
    const options = {
        method: 'GET',
        url: `https://youtube-downloader9.p.rapidapi.com//videoandaudio`,
        headers: {
          'X-RapidAPI-Key': '1f947199c7msh3bc6fd219522000p1bd19cjsn318d2499f463',
          'X-RapidAPI-Host': 'youtube-downloader9.p.rapidapi.com'
        }
        
      };
      

      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.request(options)
            const link =(response.data);
            window.open(link[0]?.url, "_blank")
            
            
            
                   
            
        } catch (error) {
            console.log(error)
        }
    }
      

    return (
        <div>
            <form className='form-download' onSubmit={handleSubmit}>
                <label htmlFor="">Enter A Youtube Link</label>
                <input type="text" placeholder='link' onChange={(e) => setLink(e.target.value)}/>
                <button className='download-btn' type='submit'>Download</button>
            </form>
            
        </div>
    )
}

render(<Popup />, document.getElementById("react-target"));
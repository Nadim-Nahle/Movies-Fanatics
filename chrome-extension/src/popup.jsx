import React from 'react';
import { render } from 'react-dom';

function Popup() {
    return (
        <div>
            <form className='form-download' action="">
                <label htmlFor="">Enter A Youtube Link</label>
                <input type="text" placeholder='link' />
                <button className='download-btn'>Download</button>
            </form>
            
        </div>
    )
}

render(<Popup />, document.getElementById("react-target"));
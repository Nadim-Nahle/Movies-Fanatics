import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import AdminPanel from './components/adminpanel/AdminPanel';

function App() {



  return (
    <>
      <div className="App">

        <div className='AdminPanel'>
          <AdminPanel />
        </div>
      </div>
    </>
  );
}

export default App;

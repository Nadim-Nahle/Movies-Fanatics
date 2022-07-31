import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminPanel from './components/adminpanel/AdminPanel';
import Login from './components/login/Login';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/adminpanel" element={<AdminPanel />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

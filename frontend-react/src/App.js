import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Movies from "./pages/movies/Movies";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;

import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Movies from "./pages/movies/Movies";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./middlewares/RequireAuth";
import Missing from "./pages/missing/Missing";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          

          {/*PROTECTED ROUTES*/}
          <Route element={<RequireAuth />}>
            <Route path="/movies" element={<Movies />}></Route>

          </Route>

          {/*404 ROUTE*/}
          <Route path="*" element={<Missing />}></Route>

        </Route>
        
      </Routes>

    </div>
  );
}

export default App;

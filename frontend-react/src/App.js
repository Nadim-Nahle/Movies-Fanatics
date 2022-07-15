import React, { useEffect } from "react";
import Homepage from "./pages/homepage/Homepage";
import Movies from "./pages/movies/Movies";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import RequireAuth from "./middlewares/RequireAuth";
import Missing from "./pages/missing/Missing";
import Profile from "./pages/profile/Profile";
import Swipe from "./pages/swipe/Swipe";
import useAuth from "./hooks/useAuth";
import { useCookies } from "react-cookie";
import Messenger from "./pages/messenger/Messenger";


function App() {

  const { setAuth } = useAuth();
  const [cookies ] = useCookies(['user'])
  const user = cookies?.user;
  
  setAuth({user});

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/swipe" element={<Swipe />}></Route>
          <Route path="/messenger" element={<Messenger />}></Route>
         
          

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

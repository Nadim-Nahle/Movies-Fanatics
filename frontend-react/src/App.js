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
import Messenger from "./pages/messenger/Messenger";
import ChatBot from "./components/chatBot/ChatBot";
import Payment from "./components/payment/Payment";
import Premium from "./components/premium/Premium";
import useAuth from "./hooks/useAuth";
import { useCookies } from "react-cookie";
import VideoStream from "./components/videoStream/VideoStream";

function App() {
  const { setAuth } = useAuth();
  const [cookies] = useCookies(["user"]);

  useEffect(()=>{
    const user = cookies?.user;
    setAuth({ user });
  },[])
  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*PUBLIC ROUTES*/}
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="payment" element={<Payment />}></Route>
          <Route path="/video" element={<VideoStream />}></Route>

          {/*PROTECTED ROUTES*/}
          <Route element={<RequireAuth allowedRoles={["user", "premium"]} />}>
            <Route path="/movies" element={<Movies />}></Route>
            <Route path="/auth/messenger" element={<Messenger />}></Route>
            <Route path="/auth/profile" element={<Profile />}></Route>
            <Route path="/auth/swipe" element={<Swipe />}></Route>
            <Route path="/auth/premium" element={<Premium />}></Route>
          </Route>

          {/*PREMIUM ROUTES*/}
          <Route element={<RequireAuth allowedRoles={["premium"]} />}>
            <Route path="/auth/chatbot" element={<ChatBot />}></Route>
          </Route>

          {/*404 ROUTE*/}
          <Route path="*" element={<Missing />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Movies from "./pages/movies/Movies";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;

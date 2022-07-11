import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Movies from "./pages/movies/Movies";
import Register from "./pages/register/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Register />
    </div>
  );
}

export default App;

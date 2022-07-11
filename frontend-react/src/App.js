import React from "react";
import Homepage from "./pages/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Movies from "./pages/movies/Movies";

function App() {
  return (
    <div>
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;

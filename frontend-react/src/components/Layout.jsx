import { Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import FloatingBtn from "./floatingBtn/FloatingBtn";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  const { auth } = useAuth();
  const Location = useLocation();
  return (
    <>
      {Location.pathname.includes("movies") ? null : <Navbar />}

      <main className="App">
        <Outlet />
      </main>

      {Location.pathname.includes("movies") ? null : <FloatingBtn />}
    </>
  );
};

export default Layout;

import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "./navbar/Navbar";

const Layout = () => {
    
    return (
        <>
            <Navbar />
            
            <main className="App">   
                   
                <Outlet />
                
            </main>
        </>
        
    )
}

export default Layout
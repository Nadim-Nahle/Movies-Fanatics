import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Navbar from "./navbar/Navbar";

const Layout = () => {
    const { setAuth } = useAuth();
    const [cookies ] = useCookies(['user'])
    const user = cookies?.user;
    setAuth({user});

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
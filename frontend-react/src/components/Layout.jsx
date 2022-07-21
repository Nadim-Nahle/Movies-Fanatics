
import { Outlet } from "react-router-dom";
import FloatingBtn from "./floatingBtn/FloatingBtn";
import Navbar from "./navbar/Navbar";

const Layout = () => {
    
    return (
        <>
            <Navbar />
            
            <main className="App">   
                   
                <Outlet />
                
            </main>
            <FloatingBtn />
        </>
        
    )
}

export default Layout
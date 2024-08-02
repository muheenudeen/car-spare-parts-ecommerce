import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom';


const Style = () => {
    return (
        <>
            <Navbar />
            <Outlet />

        </>
    )
}

export default Style
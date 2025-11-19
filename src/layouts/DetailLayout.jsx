import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";

export default function DetailLayout(){
    return (
        <>
            <Navbar />
            <div className="max-w-5xl mx-auto">
                <Outlet />
            </div>
        </>
    )
}
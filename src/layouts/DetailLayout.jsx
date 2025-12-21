import { Outlet } from "react-router";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function DetailLayout() {
    return (
        <>
            <div className="flex flex-col min-h-screen dark:bg-black">
                <Navbar />
                <div className="flex-grow sm:mt-3 mt-8 max-w-5xl mx-auto">
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    )
}
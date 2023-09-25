import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Root() {
    return (
        <div className="bg-white">
            <div className="relative bg-gradient-to-tl from-white via-slate-200 to-gray-200">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
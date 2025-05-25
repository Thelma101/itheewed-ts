import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const Homepage: React.FC = () => {
    return (
        <>
            <div className="">
                <Navbar />
                <Banner />
            </div>
        </>
    )
}

export default Homepage;
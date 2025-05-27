import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "@/components/Category";

const Homepage: React.FC = () => {
    return (
        <>
            <div className="">
                <Navbar />
                <Banner />
                <Category />
            </div>
        </>
    )
}

export default Homepage;
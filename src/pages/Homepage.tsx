import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "@/components/Category";
import VendorGallery from "@/components/VendorGallery";
import Test from "@/components/Test";

const Homepage: React.FC = () => {
    return (
        <>
            <div className="">
                <Navbar />
                <Banner />
                <Category />
                <VendorGallery />
                {/* <Test /> */}
            </div>
        </>
    )
}

export default Homepage;
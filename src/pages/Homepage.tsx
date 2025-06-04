import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Category from "@/components/Category";
import VendorGallery from "@/components/VendorGallery";
import Test from "@/components/Test";
import FeaturesCard from "@/components/FeaturesCard";
import WeddingWebsite from "@/components/WeddingWebsite";
import Footer from "@/components/Footer";
import CalendarSection from "@/components/CalendarSection";

const Homepage: React.FC = () => {
    return (
        <>
            <div className="">
                <Navbar />
                <Banner />
                <Category />
                <VendorGallery />
                <FeaturesCard />
                <WeddingWebsite />
                {/* <Test /> */}
                <CalendarSection />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Homepage;
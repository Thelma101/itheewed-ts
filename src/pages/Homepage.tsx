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
import TimelineFooter from "@/components/footers/TimelineFooter";
import Test2 from "@/components/test2";

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
                <TimelineFooter />
                <Footer />
                <Test2 />
            </div>
        </>
    )
}

export default Homepage;
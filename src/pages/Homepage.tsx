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
import WeddingHashtags from "@/components/WeddingHashtags";
import CalendarPage from "./CalendarPage";
import BannerMobileLayout1 from "@/components/BannerMobileLayout1";
import BannerMobileLayout2 from "@/components/BannerMobileLayout2";
import BannerMobileLayout3 from "@/components/BannerMobileLayout3";

const Homepage: React.FC = () => {
    return (
        <>
            <div className="">
                <Navbar />
                <Banner />
                
                <BannerMobileLayout3 />
                <Category />
                <VendorGallery />
                <FeaturesCard />
                <WeddingWebsite />
                {/* <Test /> */}
                <CalendarSection />
                {/* <CalendarPage /> */}
                {/* <TimelineFooter /> */}
                {/* <DynamicFooter /> */}
                <WeddingHashtags />
                <Footer />
            </div>
        </>
    )
}

export default Homepage;
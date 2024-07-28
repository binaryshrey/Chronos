import React from "react";
import HeroSection from "./HeroSection";
import MarqueSection from "./MarqueSection";
import Features from "./Features";
import FeaturesDetailed from "./FeaturesDetailed";
import CTA from "./CTA";
import Footer from "./Footer";

const Home = () => {
    return(
        <>
            <HeroSection />
            <MarqueSection />
            <Features />
            <FeaturesDetailed />
            <CTA />
            <Footer />
        </>
    )
}

export default Home;
import React from "react";
import HeroSection from "./HeroSection";
import MarqueSection from "./MarqueSection";
import Features from "./Features";
import FeaturesDetailed from "./FeaturesDetailed";
import CTA from "./CTA";

const Home = () => {
    return(
        <>
            <HeroSection />
            <MarqueSection />
            <Features />
            <FeaturesDetailed />
            <CTA />
        </>
    )
}

export default Home;
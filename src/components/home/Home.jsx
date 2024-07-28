import React from "react";
import HeroSection from "./HeroSection";
import MarqueSection from "./MarqueSection";
import Features from "./Features";
import FeaturesDetailed from "./FeaturesDetailed";

const Home = () => {
    return(
        <>
            <HeroSection />
            <MarqueSection />
            <Features />
            <FeaturesDetailed />
        </>
    )
}

export default Home;
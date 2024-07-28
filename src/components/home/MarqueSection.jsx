import React from "react";
import Marquee from "react-fast-marquee";
import js from "../../assets/js.svg"
import ts from "../../assets/ts.svg"
import py from "../../assets/py.svg"
import react from "../../assets/react.svg"
import tailwind from "../../assets/tailwind.svg"
import mui from "../../assets/mui.svg"
import supabase from "../../assets/supabase.svg"
import fastapi from "../../assets/fastapi.svg"
import vercel from "../../assets/vercel.svg"






const MarqueSection = () => {
    return (
        <>
            <div class="flex justify-center mb-12 mt-12">
                <h4 class="text-center text-2xl"> <span class="text-indigo-600 font-semibold">Powered by</span> state of the art frameworks and libraries</h4>
            </div>
            <div>
                <Marquee gradient gradientColor="white" gradientWidth={600}>
                    <img src={js} alt="react" class="mr-12 h-8"/>
                    <img src={ts} alt="react"  class="mr-12 h-8"/>
                    <img src={py} alt="react"  class="mr-12 h-8"/>
                    <img src={react} alt="react"  class="mr-12 h-8"/>
                    <img src={tailwind} alt="react"  class="mr-12 h-8"/>
                    <img src={mui} alt="react"  class="mr-12 h-8"/>
                    <img src={supabase} alt="react"  class="mr-12 h-8"/>
                    <img src={fastapi} alt="react"  class="mr-12 h-8"/>
                    <img src={vercel} alt="react"  class="mr-12 h-8"/>

                </Marquee>
            </div>
        </>
    )
}

export default MarqueSection;
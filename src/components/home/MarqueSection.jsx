import React from 'react';
import Marquee from 'react-fast-marquee';
import js from '../../assets/js.svg';
import ts from '../../assets/ts.svg';
import py from '../../assets/py.svg';
import react from '../../assets/react.svg';
import tailwind from '../../assets/tailwind.svg';
import mui from '../../assets/mui.svg';
import supabase from '../../assets/supabase.svg';
import fastapi from '../../assets/fastapi.svg';
import vercel from '../../assets/vercel.svg';

const MarqueSection = () => {
  const content = (val) => (
    <Marquee gradient gradientColor="white" gradientWidth={val}>
      <img src={js} alt="react" className="mr-12 h-8" />
      <img src={ts} alt="react" className="mr-12 h-8" />
      <img src={py} alt="react" className="mr-12 h-8" />
      <img src={react} alt="react" className="mr-12 h-8" />
      <img src={tailwind} alt="react" className="mr-12 h-8" />
      <img src={mui} alt="react" className="mr-12 h-8" />
      <img src={supabase} alt="react" className="mr-12 h-8" />
      <img src={fastapi} alt="react" className="mr-12 h-8" />
      <img src={vercel} alt="react" className="mr-12 h-8" />
    </Marquee>
  );

  return (
    <>
      <div className="flex justify-center mb-12 mt-12">
        <h4 className="text-center text-2xl">
          {' '}
          <span className="text-violet-600 font-semibold">Powered by</span> state of the art frameworks and libraries
        </h4>
      </div>
      <div className="lg:block hidden">{content(600)}</div>
      <div className="lg:hidden block">{content(100)}</div>
    </>
  );
};

export default MarqueSection;

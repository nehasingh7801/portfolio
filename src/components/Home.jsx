import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Video from '../assets/nehavideo.mp4';

const Home = () => {
  return (
    <div name="home" className="relative w-full h-screen pb-3">
      <video autoPlay loop muted className="absolute top-0 left-0 object-cover w-full h-full">
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10">
        <h2 className="text-3xl sm:text-5xl font-bold">Welcome to Neha Singh's Website</h2>
        <p className="py-4 text-base md:text-lg lg:text-xl text-center">
          A tech enthusiast, weaving her narrative into the tapestry of urban dreams at 22.
        </p>
        <div className="flex justify-center">
          <button
            to="portfolio"
            smooth
            duration={500}
            className="group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Portfolio
            <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

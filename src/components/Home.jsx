import React from 'react'
import Heroimage from "../assets/heroimage.jpeg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
import Video from "../assets/nehavideo.mp4";

const Home = () => {
  return (    
      <div name='Home' 
      className="relative w-full">
       
      <video
        autoPlay
        loop
        muted
        className=" w-full h-auto max-w-full "
        style={{zIndex: -1}}
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h2 className="text-3xl sm:text-5xl font-bold text-white ">Welcome to Neha Singh's Website</h2>
        <p className="py-4 text-base md:text-lg lg:text-xl">A tech enthusiast, weaving her narrative into the tapestry of urban dreams at 22.</p>
        <div className="flex justify-center">
            <button
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
      </div>
      
    </div>
 


  
  )
}

export default Home
import React from 'react'
import heroimage from "../assets/heroimage.png";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";
const Home = () => {
  return (
    <div name="home" 
    className="h-screen w-full bg-gradient-to-b
     from-black  to-gray-900 ">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-4xl font-bold text-white">
            An ardent Tech Enthusiast 
          </h2>

          <p className="text-gray-500 py-4 max-w-md">
          A vibrant 22-year-old, 
          setting forth on a journey to the realm of technology, 
          captivated by the nature and love, 
          as she navigates cities and bustling streets, 
          weaving her tech-infused narrative into the intricate tapestry of urban dreams.
          </p>

          <div>
            <button className="group white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
            from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
              
            </button>
          </div>
        </div>
        <div>
          <img 
          src={heroimage} 
          alt="my profile"
          className="rounded-2xl mx-auto w-2/3 md:w-ful" />
        </div>
      </div>

    </div>
  )
}

export default Home
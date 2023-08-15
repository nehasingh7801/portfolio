import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const[nav, setNav]=useState(false);
const links=[
    {
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'about'
    },
    {
        id:3,
        link:'portfolio'
    },
    {
        id:4,
        link:'experience'
    },
    {
        id:5,
        link:'contact'
    },

]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-black bg-white fixed z-20">
        <div>
            <h1 className="text-5xl font-signature ml-2 font-weight: 700">neha.</h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({id, link})=>(
                <li 
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-black hover:scale-105 duration-200 font-weight: 700">
                {link}
                </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-black md:hidden"> 
            {nav ? <FaTimes size={30}/>:<FaBars size={30}/>}
        </div>

        {nav && (
            <ul className="flex flex-col justify-content items-center absolute top-0 left-0 w-full h-screen text-white bg-black">
            {links.map(({id, link})=>(
                    <li 
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6 text-4xl">
                    {link}
                    </li>
                ))}
                
    
            </ul>
        )}

        
        
    </div>
  );
};

export default Navbar
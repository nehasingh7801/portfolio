import React from 'react'
import Heroimage from "../assets/heroimage.jpeg";

const About = () => {
    return (
        <div name="about" className="w-full h-screen p-4 bg-black text-white">
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col md:flex-row justify-center w-full h-full">
            
            <div className="pb-8 py-4 px-8">
            
              <img
                src={Heroimage}
                alt="Profile"
                className="w-48  object-cover"
              />
            </div>
    
            <div className="md:w-3/4">
              <div className="pb-8">
                <p className="text-4xl font-bold inline">who am i?</p>
              </div>
    
              <p>
                Exploring the world of technology with a curious mind and a bit of coding. 
                Creating stories from data, guiding new ideas, and making the most of computer information. All this while enjoying coffee and chasing dreams.
              </p>
    
              <br />
    
              <p>
              I am constantly fueled by curiosity and a passion for innovation. 
              With a solid foundation in programming languages like Java and Python, coupled with expertise in data manipulation, visualization, and machine learning, I craft solutions that turn data into insights. 
              I thrive in collaborative environments, evident through my internship experiences in both software development and data science, where I've contributed to real-world projects. 
              My drive to learn, experiment, and create makes me a dedicated problem-solver and a versatile asset in the tech cosmos.
              </p>
            </div>
          </div>
        </div>
      );
    };
export default About
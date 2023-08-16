import React from 'react';
import kyc from '../assets/portfolio/kyc.jpg';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      headingText: 'KYC Engine',
      introText: 'A system that verifies each person’s identity using Aadhar and PAN verification using Flask and OpenCV ',
      src: kyc,
      hasDemo: false,
      codeLink: 'https://github.com/nehasingh7801/kyc',
    },
    {
      id: 2,
      headingText: 'Iris Detection Model',
      introText: 'A real-time Deep Iris Detection Model using Computer Vision (TensorFlow, Image processing)',
      src: kyc,
      hasDemo: false,
      codeLink: 'https://github.com/nehasingh7801/IrisDetection',

    },
    {
      id: 3,
      headingText: 'CMS',
      introText: 'A platform for bloggers to manage their profiles and interact with various aspects of a blogging system in PHP',
      src: kyc,
      hasDemo: false,
      codeLink: 'https://github.com/nehasingh7801/CMS',
    },
    {
      id: 4,
      headingText: 'Weather App',
      introText: 'Weather App delivering real-time updates from 100+ locations to users using ReactJS',
      src: kyc,
      hasDemo: false,
      codeLink: 'https://github.com/nehasingh7801/weather-app',
    },
    {
      id: 5,
      headingText: 'Research Paper',
      introText: 'Secure peer to peer image sharing using Rubik’s Cube algorithm',
      src: kyc,
      hasDemo: false,
      codeLink: '',
    },
    {
      id: 6,
      headingText: 'Twitter Bot',
      introText: 'A bot that automatically tweets content generated by artificial intelligence using GPT-3',
      src: kyc,
      hasDemo: false,
      codeLink: 'https://github.com/nehasingh7801/twitter-bot',
    },
   



  ];

  return (
    <div className="portfolio-section" name="portfolio">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold ">Portfolio</p>
          <p className="py-2">Check out some of my work right here</p>
        </div>

        <div className="bg-beige grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-0 lg:px-12">
          {portfolios.map(({ id, introText, headingText, hasDemo, demoLink, codeLink }, index) => (
            <div
              key={id}
              className={`shadow-md ${index % 2 === 0 ? 'bg-black' : 'bg-white border-solid border-2 border-black'} ${index % 2 === 0 ? 'text-white' : 'text-black'}`}
              style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="p-4"> {/* Add padding */}
                <div className="text-center overflow-hidden whitespace-nowrap overflow-ellipsis text-lg md:text-lg lg:text-xl xl:text-2xl font-bold relative">
                  <h3 className="break-words">{headingText}</h3> {/* Add break-words class */}
                  <div className="border-b-2 border-gray-500 absolute left-1/4 right-1/4 bottom-0"></div>
                </div>
                <div className="text-center">
                  <p className="text-sm md:text-base lg:text-md py-4">{introText}</p> {/* Remove px-6 for better readability */}
                </div>
                <div className="flex items-center justify-center flex-col">
                  {hasDemo && (
                    <a
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105"
                    >
                      Demo
                    </a>
                  )}
                  <a
                    href={codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-105 flex items-center justify-center code-button"
                  >
                    Code<span className="ml-2">
                      <FaGithub size={30} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import python from "../assets/python.png";
import aws from "../assets/aws.png";
import sklearn from "../assets/scikit learn.png";
import tailwind from "../assets/tailwind.png";
import tensorflow from "../assets/tensor.png";
import java from "../assets/java.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-gray-400",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-gray-400",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: java,
      title: "JAVA",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tensorflow,
      title: "TensorFlow",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: aws,
      title: "AWS",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: sklearn,
      title: "Scikit Learning",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="skills" className="bg-black min-h-screen flex flex-col justify-center items-center">
      <div className="w-full py-4 text-white max-w-screen-lg">
        <div className="mb-8">
          <p className="text-4xl font-bold  p-2 inline-block">
            Skills
          </p>
          <p className="py-2">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 ${style}`}
            >
              <div className="flex flex-col items-center h-full">
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-auto">{title}</p>
              </div>
            </div>
          ))}
        </div>

          
    </div>
    </div >
  );
};

export default Skills;
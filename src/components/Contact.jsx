import React from "react";

const Contact = () => {
  return (
    <div className="contact-section bg-custom-beige">
      <div name="contact" className="w-full h-full p-4 text-black">
        <div className="max-w-screen-lg mx-auto">
          <div className="pb-8">
            <p className="text-4xl font-bold bg-custom-beige eb-garamond">
              hit me up!
            </p>
            <p className="py-2">questions? tips? recommendations? just wanna say hi?</p>
          </div>
          <div className="flex justify-center items-center">
            <form
              action="https://getform.io/f/6b10f120-db33-498e-afcc-bae99705f2b4"
              method="POST"
              className="flex flex-col w-full md:w-1/2"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-custom-gray border-2 text-black focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-2 bg-custom-gray border-2 text-black focus:outline-none"
              />

              <textarea
                name="message"
                placeholder="Enter your message"
                rows="10"
                className="p-2 bg-custom-gray border-2  text-black focus:outline-none"
              ></textarea>

              <button className="text-white text-strong bg-black border-solid border-white px-6 py-3 my-8 mx-auto flex items-center hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
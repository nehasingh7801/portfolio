import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Neha Singh. All Rights Reserved.</p>
        <p>Thanks for stopping by</p>
      </div>
    </footer>
  );
};

export default Footer;

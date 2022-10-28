import React from "react";

const Footer = () => {
  return (
    <div className='w-full bg-navbar-theme py-4 flex flex-row items-center justify-center text-white'>
      &copy; Copyright {new Date().getFullYear()}
    </div>
  );
};

export default Footer;

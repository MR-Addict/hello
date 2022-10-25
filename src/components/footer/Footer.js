import React from "react";

const Footer = () => {
  return (
    <div className='w-full bg-main-dark-bg py-4 flex flex-row items-center justify-center'>
      &copy; Copyright {new Date().getFullYear()} 校大学生科协
    </div>
  );
};

export default Footer;

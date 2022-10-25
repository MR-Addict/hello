import React from "react";

import config from "./config";
import logo from "./logo.jpg";

const Menu = ({ item }) => {
  return (
    <div className='flex flex-row items-center relative'>
      <div className='hover:text-main-theme p-1 rounded-md m-1 flex flex-row items-center gap-1 cursor-pointer'>
        {item.title}
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className='flex flex-row bg-main-dark-bg p-3 justify-between items-center shadow-xl px-10 bg-navlogo'>
      <div className='h-full'>
        <img src={logo} alt='badge' className='h-[80px]' />
      </div>
      <div className='flex flex-row gap-1 text-xl'>
        {config.map((item) => {
          return <Menu key={item.title} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;

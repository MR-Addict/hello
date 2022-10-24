import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

import config from "./config";
import logo from "./logo.jpg";

const Submenu = ({ item }) => {
  return (
    <div className='flex flex-col items-start absolute top-10 left-0 bg-main-dark-bg shadow-xl'>
      {item.map((prop) => {
        return <Menu key={Math.random()} item={prop} />;
      })}
    </div>
  );
};

const Menu = ({ item }) => {
  const [dropDrow, setDropdown] = useState(false);
  return (
    <div
      onMouseOver={() => setDropdown(true)}
      onMouseOut={() => setDropdown(false)}
      className='flex flex-row items-center relative'
    >
      <div className='hover:text-main-theme p-1 rounded-md m-1 flex flex-row items-center gap-1 cursor-pointer'>
        {item.title}
        {item.submenu && <AiFillCaretDown />}
      </div>
      {item.submenu && dropDrow && <Submenu item={item.submenu} />}
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

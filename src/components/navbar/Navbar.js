import React from "react";
import { NavLink } from "react-router-dom";

import config from "./config";

const Menu = ({ item }) => {
  const commonStyle = "hover:text-main-theme ";
  return (
    <NavLink
      end
      to={item.link}
      className={({ isActive }) => (isActive ? commonStyle + "text-main-theme" : commonStyle + "text-white")}
    >
      {item.title}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <div className='flex flex-row bg-navbar-theme justify-between items-center shadow-xl py-3 text-white px-3 md:px-20'>
      <div className='text-3xl font-cursive'>
        <p>Hello</p>
      </div>
      <div className='flex flex-row gap-5 text-xl'>
        {config.map((item) => {
          return <Menu key={item.title} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Navbar;

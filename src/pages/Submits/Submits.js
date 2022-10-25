import React from "react";

import Body from "./Body";
import SideBar from "./SideBar";

const Submits = () => {
  return (
    <div className='w-full bg-main-bg md:px-20 px-3 py-8 flex flex-col md:flex-row gap-5'>
      <Body />
      <SideBar />
    </div>
  );
};

export default Submits;

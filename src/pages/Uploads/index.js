import React, { useEffect } from "react";

import { Body, SideBar } from "./components";
import { useStateContext } from "../../context/ContextProvider";

const Uploads = () => {
  const { updateUploads } = useStateContext();
  useEffect(() => {
    updateUploads();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='w-full bg-main-bg md:px-20 px-3 py-8 flex flex-col md:flex-row gap-5'>
      <Body />
      <SideBar />
    </div>
  );
};

export default Uploads;

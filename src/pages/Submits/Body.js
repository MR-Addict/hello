import React from "react";
import { FaShare } from "react-icons/fa";

import { useStateContext } from "../../context/ContextProvider";

const Body = () => {
  const { submits, handleClick } = useStateContext();

  return (
    <div className='flex flex-col md:gap-20 gap-5 w-full text-white'>
      {submits.map((item) => {
        return (
          <div key={item.id} className='flex flex-col md:gap-8 gap-4'>
            <img src={item.img} alt={item.id} className='rounded-xl shadow-2xl object-cover' />
            <div className='flex flex-row items-center justify-between px-3 font-semibold border-b-2 border-main-bg'>
              <div className='flex flex-row gap-4'>
                <span>简介:{item.info}</span>
              </div>
              <div className='flex flex-row gap-4'>
                <span>ID:{item.id}</span>
                <span>浏览:{item.views}</span>
                <a
                  href={item.link}
                  target='_blank'
                  className='flex flex-row items-center justify-center gap-1'
                  rel='noreferrer'
                  onClick={() => handleClick(item.id)}
                >
                  <span>跳转</span>
                  <div className='text-main-theme'>
                    <FaShare />
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Body;

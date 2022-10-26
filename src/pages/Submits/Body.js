import React from "react";
import { FaShare } from "react-icons/fa";

import { useStateContext } from "../../context/ContextProvider";

const Body = () => {
  const { submits, handleClick } = useStateContext();

  return (
    <div className='flex flex-col md:gap-20 gap-5 w-full'>
      {submits.map((item) => {
        return (
          <div key={item.id} className='flex flex-col md:gap-8 gap-4 rounded-xl'>
            <img src={item.img} alt={item.id} className='rounded-xl shadow-2xl object-cover' />
            <div className='flex flex-row items-center justify-between px-3 font-semibold border-b-2 border-main-dark-bg'>
              <div className='flex flex-row gap-4'>
                <span>用户ID：{item.id}</span>
                <span>访问次数：{item.views}</span>
              </div>
              <div className='flex flex-row gap-4'>
                <a
                  href={item.link}
                  target='_blank'
                  className='flex flex-row items-center justify-center gap-1'
                  rel='noreferrer'
                  onClick={() => handleClick(item.id)}
                >
                  <span>了解更多</span>
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

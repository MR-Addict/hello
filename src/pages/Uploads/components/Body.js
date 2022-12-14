import React from "react";
import { FaShare, FaUserAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

import { useStateContext } from "../../../context/ContextProvider";

const Body = () => {
  const { uploads, handleClick } = useStateContext();

  return (
    <div className='flex flex-col md:gap-20 gap-5 w-full min-h-screen'>
      {uploads.length?(uploads.map((item) => {
        return (
          <div key={item.id} className='flex flex-col md:gap-8 gap-4'>
            <img alt={item.id} src={item.img} loading='lazy' className='rounded-xl shadow-2xl object-cover max-h-[600px]' />
            <div className='flex flex-row items-center justify-between px-3 font-semibold border-b-2 border-main-dark-bg'>
              <div className='flex flex-row gap-4'>
                <span>{item.info}</span>
              </div>
              <div className='flex flex-row gap-4'>
                <span className='flex flex-row items-center gap-1'>
                  <div className='text-main-theme'>
                    <FaUserAlt />
                  </div>
                  {item.id}
                </span>
                <span className='flex flex-row items-center gap-1'>
                  <div className='text-main-theme'>
                    <AiFillEye />
                  </div>
                  {item.views}
                </span>
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
      })):(
        <div className="text-center w-full">暂无上传</div>
      )}
    </div>
  );
};

export default Body;

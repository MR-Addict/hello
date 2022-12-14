import React from "react";
import { RiNumbersFill } from "react-icons/ri";
import { MdTouchApp } from "react-icons/md";
import { FaShare } from "react-icons/fa";

import { useStateContext } from "../../../context/ContextProvider";

const Card = ({ item }) => {
  return (
    <div className='flex flex-row items-center justify-between p-2 rounded-xl bg-gray-200 w-full shadow-md'>
      <div>
        <div className='text-5xl text-purple-600'>{item.icon}</div>
        <span className='text-sm'>{item.name}</span>
      </div>
      <span className='text-green-500 text-4xl font-semibold'>{item.value}</span>
    </div>
  );
};

const SideBar = () => {
  const { uploads, handleClick } = useStateContext();
  const cards = [
    { name: "上传量", value: uploads.length, icon: <RiNumbersFill /> },
    { name: "点击量", value: uploads.reduce((acc, obj) => acc + obj.views, 0), icon: <MdTouchApp /> },
  ];

  return (
    <div className='md:w-[500px] w-full bg-main-bg shadow-2xl max-h-[100vh] h-fit sticky top-0 rounded-xl p-4 hidden md:flex flex-col gap-2 overflow-y-auto'>
      <div className='flex flex-col gap-1'>
        <div>数据统计</div>
        <div className='flex flex-row justify-between gap-4'>
          {cards.map((item) => {
            return <Card item={item} key={item.name} />;
          })}
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div>最受欢迎</div>
        <div className='flex flex-col gap-4'>
          {uploads.length?(uploads
            .sort((a, b) => b.views - a.views)
            .slice(0, 3)
            .map((item) => {
              return (
                <div key={item.id} className='flex flex-col gap-2 bg-gray-200 p-2 rounded-md'>
                  <img src={item.img} alt={item.id} loading='lazy' className='rounded-md max-h-[150px] object-cover' />
                  <div className='flex flex-row items-center justify-between'>
                    <span>{item.info}</span>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noreferrer'
                      className='flex flex-row gap-1 items-center'
                      onClick={() => handleClick(item.id)}
                    >
                      <span>{item.views}</span>
                      <div className='text-main-theme'>
                        <FaShare />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })):(
              <div className="text-center w-full">暂无上传</div>
            )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

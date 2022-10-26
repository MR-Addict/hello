import React from "react";
import { RiNumbersFill } from "react-icons/ri";
import { MdTouchApp } from "react-icons/md";
import { FaShare } from "react-icons/fa";

import image1 from "./images/1.png";

const submits = [
  {
    id: 202021007063,
    image: image1,
    views: 10,
    link: "/",
  },
  {
    id: 202021007064,
    image: image1,
    views: 20,
    link: "/",
  },
  {
    id: 202021007065,
    image: image1,
    views: 20,
    link: "/",
  },
];

const data = [
  {
    name: "提交量",
    value: 20,
    icon: <RiNumbersFill />,
  },
  {
    name: "点击量",
    value: 100,
    icon: <MdTouchApp />,
  },
];

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
  return (
    <div className='md:w-[400px] w-full bg-main-bg shadow-2xl md:h-[100vh] h-fit sticky top-0 rounded-xl p-4 flex flex-col gap-2'>
      <div className='flex flex-col gap-1'>
        <div>数据统计</div>
        <div className='flex flex-row justify-between gap-4'>
          {data.map((item) => {
            return <Card item={item} key={item.name} />;
          })}
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <div>最受欢迎</div>
        <div className='flex flex-col gap-4'>
          {submits.map((item) => {
            return (
              <div key={item.id} className='flex flex-col gap-2 bg-gray-200 p-2 rounded-md'>
                <img src={item.image} alt={item.id} className='rounded-md' />
                <div className='flex flex-row items-center justify-between'>
                  <span>{item.id}</span>
                  <a href={item.link} className='flex flex-row gap-1 items-center'>
                    <span>{item.views}</span>
                    <div className='text-main-theme'>
                      <FaShare />
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

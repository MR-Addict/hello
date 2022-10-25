import React from "react";

import { Upload } from "../../components";
import { useStateContext } from "../../context/ContextProvider";

const Home = () => {
  const { isClickUpload, setIsClickUpload } = useStateContext();
  const onClickUpload = () => setIsClickUpload(true);

  return (
    <div className='bg-welcome bg-center bg-cover h-[92vh]'>
      <div className='bg-white bg-opacity-50 w-full h-full flex items-center justify-center relative'>
        <div className=' md:w-[380px] w-[300px] h-[430px] relative flex flex-col items-start justify-between bg-slate-700 text-white px-10 py-14 rounded-xl'>
          <p className='text-xl font-semibold'>同学你好:</p>
          <p>
            这是一个学习前端基础的分享网站，在这里，你可以上传你学习编写的前端文件，也可以欣赏他人的作品，体验前端的魅力。
          </p>
          <p>你可以尽情第发挥你的创意和想法，编写属于你自己的Profile，让我们认识不一样的你。</p>
          <button onClick={onClickUpload} className='bg-main-theme p-3 rounded-xl w-full font-semibold duration-200'>
            立即上传
          </button>
          {isClickUpload && <Upload />}
        </div>
      </div>
    </div>
  );
};

export default Home;

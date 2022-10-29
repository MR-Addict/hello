import React from "react";

import { Upload } from "../../components";
import { useStateContext } from "../../context/ContextProvider";

const Home = () => {
  const { isClickUpload, setIsClickUpload } = useStateContext();
  const onClickUpload = () => setIsClickUpload(true);

  return (
    <div className='bg-welcome bg-center bg-cover h-[92vh]'>
      <div className='bg-white bg-opacity-50 w-full h-full flex items-center justify-center relative'>
        <div className=' md:w-[380px] w-[300px] h-[430px] relative flex flex-col items-start justify-between bg-slate-700 text-white px-10 py-10 rounded-xl'>
          <p className='text-xl font-semibold'>同学你好:</p>
          <p>
            这是一个学习前端基础的分享网站，在这里，你可以上传你学习编写的前端文件,尽情第发挥你的创意和想法，也可以欣赏他人的作品，感受前端的魅力。
          </p>
          <p>
            不过上传文件时需要注意几点注意事项，个人ID后期不可更改，不建议使用中文和空格；文件引用时要使用相对路径。
          </p>
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

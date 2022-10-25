import React, { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import { useStateContext } from "../../context/ContextProvider";

const Upload = () => {
  const { setIsClickUpload } = useStateContext();

  const [uploadFiles, setUploadFiles] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
  const hiddenFileInput = useRef();
  const hiddenImageInput = useRef();

  const File = ({ file, isImage }) => {
    return (
      <div className='flex flex-row items-center h-fit m-1 p-1 bg-slate-400 rounded-md'>
        <div>{file.name}</div>
        <AiFillCloseCircle
          className='text-green-700 cursor-pointer'
          onClick={() => {
            if (isImage) setPreviewImage([]);
            else {
              let uploaded = [...uploadFiles];
              uploaded = uploaded.filter((item) => item !== file);
              setUploadFiles(uploaded);
            }
          }}
        />
      </div>
    );
  };

  return (
    <form className='absolute top-0 left-0 md:w-[380px] w-[300px] h-[430px] bg-slate-700 rounded-xl p-5 flex flex-col items-center justify-between'>
      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor='id' className='text-white'>
          个人ID
        </label>
        <input maxLength={20} required type='text' name='id' className='bg-gray-600 rounded-md p-2 outline-none' />
      </div>

      <div className='w-full'>
        <input
          required
          multiple
          type='file'
          ref={hiddenImageInput}
          onChange={() => setPreviewImage([hiddenImageInput.current.files[0]])}
          style={{ display: "none" }}
        />
        <button
          type='button'
          onClick={() => hiddenImageInput.current.click()}
          className='p-1 rounded-md bg-green-700 mb-2'
        >
          上传预览图片
        </button>
        <div className='flex bg-gray-600 rounded-md flex-wrap h-[40px] overflow-y-auto'>
          {previewImage.map((file) => (
            <File key={file.lastModified} file={file} isImage={true} />
          ))}
        </div>
      </div>

      <div className='w-full'>
        <input
          required
          multiple
          type='file'
          ref={hiddenFileInput}
          onChange={() => {
            const uploaded = [...uploadFiles];
            Array.prototype.slice.call(hiddenFileInput.current.files).forEach((file) => {
              if (uploaded.findIndex((f) => f.name === file.name) === -1) uploaded.push(file);
            });
            setUploadFiles(uploaded);
          }}
          style={{ display: "none" }}
        />
        <button
          type='button'
          onClick={() => hiddenFileInput.current.click()}
          className='p-1 rounded-md bg-green-700 mb-2'
        >
          上传网页文件
        </button>
        <div className='flex bg-gray-600 rounded-md flex-wrap h-[120px] overflow-y-auto'>
          {uploadFiles.map((file) => (
            <File key={file.lastModified} file={file} />
          ))}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center mt-4 gap-3 font-semibold w-full'>
        <button type='button' className='p-2 rounded-md bg-main-theme w-full' onClick={() => setIsClickUpload(false)}>
          取消
        </button>
        <button type='submit' className='p-2 rounded-md bg-main-theme w-full'>
          上传
        </button>
      </div>
    </form>
  );
};

export default Upload;

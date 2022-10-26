import React, { useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import BACKEND_URL from "./config";
import { useStateContext } from "../../context/ContextProvider";

const Upload = () => {
  const { setIsClickUpload } = useStateContext();

  const [userID, setUseID] = useState("");
  const [userInfo, setUserInfo] = useState("");
  const [sourceFiles, setSourceFiles] = useState([]);
  const [previewImage, setPreviewImage] = useState([]);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isUploadFailed, setIsUploadFailed] = useState(false);

  const hiddenFileInput = useRef();
  const hiddenImageInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!(userID.length && sourceFiles.length && previewImage.length)) return;
    const formData = new FormData();
    formData.append("id", userID);
    formData.append("info", userInfo);
    previewImage.forEach((item) => formData.append("preview", item));
    sourceFiles.forEach((item) => formData.append("sources", item));
    fetch(BACKEND_URL + "/api/v1/submit", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.json().status) setIsUploadFailed(false);
        else setIsUploadFailed(true);
        setIsUploaded(true);
      })
      .catch((err) => {
        console.log(err);
        setIsUploadFailed(true);
        setIsUploaded(true);
      });
  };

  const File = ({ file, isImage }) => {
    return (
      <div className='flex flex-row items-center h-fit m-1 p-1 bg-slate-400 rounded-md'>
        <div>{file.name}</div>
        <AiFillCloseCircle
          className='text-green-700 cursor-pointer'
          onClick={() => {
            if (isImage) setPreviewImage([]);
            else {
              let uploaded = [...sourceFiles];
              uploaded = uploaded.filter((item) => item !== file);
              setSourceFiles(uploaded);
            }
          }}
        />
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='absolute md:-top-10 md:-left-10 top-0 left-0 md:w-[460px] w-[300px] md:h-[510px] h-[470px] bg-slate-700 rounded-xl p-5 flex flex-col gap-2 items-center justify-between'
    >
      {isUploaded && (
        <div className='absolute top-0 left-0 md:w-[460px] w-[300px] md:h-[510px] h-[470px] bg-white bg-opacity-60 rounded-xl flex items-center justify-center duration-300'>
          <div className='flex flex-col items-center justify-center gap-5 w-2/3 h-2/3 bg-slate-700 rounded-xl'>
            <div className='text-2xl font-semibold'>{isUploadFailed ? "上传失败" : "上传成功"}</div>

            <div className='flex flex-row items-center justify-center gap-3 font-semibold w-[150px] text-center'>
              {!isUploadFailed && (
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={BACKEND_URL + "/preview/" + userID}
                  className='p-2 rounded-md bg-main-theme w-full'
                >
                  跳转
                </a>
              )}
              <button
                type='button'
                className='p-2 rounded-md bg-main-theme w-full'
                onClick={() => setIsClickUpload(false)}
              >
                确认
              </button>
            </div>
          </div>
        </div>
      )}
      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor='id' className='text-white'>
          个人ID
        </label>
        <input
          required
          type='number'
          value={userID}
          maxLength={20}
          onChange={(e) => setUseID(e.target.value)}
          className='bg-gray-600 rounded-md p-2 outline-none'
        />
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <label htmlFor='id' className='text-white'>
          简单介绍
        </label>
        <textarea
          required
          type='text'
          value={userInfo}
          maxLength={100}
          onChange={(e) => setUserInfo(e.target.value)}
          className='bg-gray-600 rounded-md p-2 outline-none'
        />
      </div>

      <div className='w-full'>
        <input
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
          multiple
          type='file'
          ref={hiddenFileInput}
          onChange={() => {
            const uploaded = [...sourceFiles];
            Array.prototype.slice.call(hiddenFileInput.current.files).forEach((file) => {
              if (uploaded.findIndex((f) => f.name === file.name) === -1) uploaded.push(file);
            });
            setSourceFiles(uploaded);
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
        <div className='flex bg-gray-600 rounded-md flex-wrap h-[80px] overflow-y-auto'>
          {sourceFiles.map((file) => (
            <File key={file.lastModified} file={file} />
          ))}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center gap-3 font-semibold w-full'>
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

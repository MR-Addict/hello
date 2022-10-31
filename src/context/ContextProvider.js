import React, { createContext, useContext, useState } from "react";

import BACKEND_URL from "../data/config";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isClickUpload, setIsClickUpload] = useState(false);
  const [uploads, setUploads] = useState([]);

  const updateUploads = () => {
    fetch(BACKEND_URL + "api/v1/uploads")
      .then(async (res) => {
        const resJSON = await res.json();
        if (resJSON.status) setUploads(resJSON.msg);
      })
      .catch((err) => console.log(err));
  };

  const handleClick = async (id) => {
    await fetch(BACKEND_URL + "api/v1/click/" + id).catch((err) => console.log(err));
    updateUploads();
  };

  return (
    <StateContext.Provider
      value={{
        isClickUpload,
        setIsClickUpload,
        uploads,
        setUploads,
        handleClick,
        updateUploads,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

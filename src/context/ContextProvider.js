import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const BACKEND_URL = "http://127.0.0.1:8090/";

export const ContextProvider = ({ children }) => {
  const [isClickUpload, setIsClickUpload] = useState(false);
  const [submits, setSubmits] = useState([]);

  const handleClick = async (id) => {
    await fetch(BACKEND_URL + "api/v1/click/" + id).catch((err) => console.log(err));
    updateSubmits();
  };

  const updateSubmits = () => {
    fetch(BACKEND_URL + "api/v1/all")
      .then(async (res) => {
        const resJSON = await res.json();
        if (resJSON.status) setSubmits(resJSON.msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <StateContext.Provider
      value={{
        isClickUpload,
        setIsClickUpload,
        submits,
        setSubmits,
        handleClick,
        updateSubmits,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

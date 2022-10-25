import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isClickUpload, setIsClickUpload] = useState(false);

  return (
    <StateContext.Provider
      value={{
        isClickUpload,
        setIsClickUpload,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

// Create Context
export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [msg, setMsg] = useState(""); // State to store message

  // Provides 'msg' and 'setMsg' to child components via context
  return (
    <MessageContext.Provider value={{ msg, setMsg }}>
      {children}
    </MessageContext.Provider>
  );
};

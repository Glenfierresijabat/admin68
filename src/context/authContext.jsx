import { createContext, useEffect, useState } from "react";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;
const INITIAL_NAME_STATE = localStorage.getItem("userName") || "";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState(INITIAL_NAME_STATE);

  useEffect(() => {
    if (name) {
      localStorage.setItem("userName", name);
    } else {
      localStorage.removeItem("userName");
    }
  }, [name]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({ name: "theme-green", color: "#299D91" });
  const [layoutTheme, setLayoutTheme] = useState(
    localStorage.getItem('layoutTheme') || 'bg-special-mainBg'
  );

  useEffect(() => {
    localStorage.setItem('layoutTheme', layoutTheme);
  }, [layoutTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, layoutTheme, setLayoutTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
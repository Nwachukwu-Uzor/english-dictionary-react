import React, { ReactNode, createContext, useState } from "react";
import { ThemeContextType } from "../../@types";

interface Props {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [font, setFont] = useState<"sans-serif" | "serif" | "mono">("sans-serif");

  const handleToggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const handleChangeFont = (font: "sans-serif" | "serif" | "mono") => {
    setFont(font);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, handleToggleTheme, font, handleChangeFont }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

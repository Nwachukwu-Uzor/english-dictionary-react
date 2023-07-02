import React, { useContext } from "react";
import { Main } from "./pages";
import { ThemeContext } from "./context/themeContext/themeContext";
import { ThemeContextType } from "./@types";

const App: React.FC = () => {
  const { theme, font } = useContext(ThemeContext) as ThemeContextType;
  return (
    <main
      className={`${
        theme === "light"
          ? "bg-white text-primary-text"
          : "bg-black-bg text-white"
      } ${
        font === "sans-serif"
          ? "font-sans"
          : font === "serif"
          ? "font-serif"
          : "font-mono"
      } min-h-screen duration-200`}
    >
      <Main />
    </main>
  );
};

export default App;

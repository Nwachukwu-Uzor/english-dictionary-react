import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext/themeContext";
import { ThemeContextType } from "../@types";

interface Props extends React.HTMLProps<HTMLFormElement> {
  word: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const WordSearch: React.FC<Props> = ({
  word,
  handleChange,
  ...props
}) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <form {...props}>
      <input
        type="text"
        value={word}
        onChange={handleChange}
        placeholder="Search for any word..."
        className={`w-full my-2 rounded-md ${
          theme === "light" ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
        } focus:ring-[0.5px] duration-200 font-semibold focus:ring-accent-purple`}
      />
    </form>
  );
};

import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { ThemeContext } from "../context/themeContext/themeContext";
import { ThemeContextType } from "../@types";

interface Props extends React.HTMLProps<HTMLFormElement> {
  word: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isEmptyWord: boolean;
}

export const WordSearch: React.FC<Props> = ({
  word,
  handleChange,
  isEmptyWord,
  ...props
}) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <form {...props}>
      <div className="relative">
        <input
          type="text"
          value={word}
          onChange={handleChange}
          placeholder="Search for any word..."
          className={`w-full my-2 rounded-md ${
            theme === "light" ? "bg-[#F4F4F4]" : "bg-[#1F1F1F]"
          } focus:ring-[0.5px] duration-100 font-semibold ${
            isEmptyWord
              ? "ring-[0.5px] ring-red-500 focus:ring-red-500"
              : "focus:ring-accent-purple"
          } focus:outline-none focus:border-0 border-0 pr-8`}
        />
        <AiOutlineSearch className="text-accent-purple text-xl absolute right-2 top-[50%] -translate-y-[50%]" />
      </div>

      <p
        className={`text-red-500 ${
          isEmptyWord ? "opacity-100" : "opacity-0"
        } duration-200`}
      >
        Whoops, can't be empty
      </p>
    </form>
  );
};

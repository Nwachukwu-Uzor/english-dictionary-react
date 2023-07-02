import React, { useContext } from "react";
import { BiBookAlt, BiMoon } from "react-icons/bi";
import { Dropdown } from "flowbite-react";
import { Toggle } from ".";
import { ThemeContext } from "../context/themeContext/themeContext";
import { IFont, ThemeContextType } from "../@types";

const fontOptions: IFont[] = [
  { id: "1", name: "Serif", value: "serif" },
  { id: "2", name: "Sans Serif", value: "sans-serif" },
  { id: "3", name: "Mono", value: "mono" },
];

const fontsMap = {
  serif: "Serif",
  "sans-serif": "Sans Serif",
  mono: "Mono",
};

export const Header: React.FC = () => {
  const { theme, font, handleToggleTheme, handleChangeFont } = useContext(
    ThemeContext
  ) as ThemeContextType;

  return (
    <div className="py-2 flex items-center justify-between">
      <BiBookAlt className="text-xl lg:text-3xl text-gray-text" />
      <div className="flex items-center gap-2 lg:gap-4">
        <Dropdown label={fontsMap[font]} inline size="sm" dismissOnClick={true}>
          {fontOptions?.map((font) => (
            <Dropdown.Item
              key={font.id}
              onClick={() => handleChangeFont(font.value)}
            >
              {font.name}
            </Dropdown.Item>
          ))}
        </Dropdown>
        <Toggle theme={theme} handleToggle={handleToggleTheme} />
        <BiMoon className="text-lg lg:text-2xl text-gray-text -translate-y-[15%]" />
      </div>
    </div>
  );
};

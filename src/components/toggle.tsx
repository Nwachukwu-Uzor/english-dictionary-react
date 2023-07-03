import React, { useMemo } from "react";

interface Props {
  theme: "light" | "dark";
  handleToggle: () => void;
}

export const Toggle: React.FC<Props> = ({ theme, handleToggle }) => {
  const themeBaseClassName: string = useMemo(() => {
    return theme === "light"
      ? "peer-checked:bg-gray-500"
      : "peer-checked:bg-accent-purple";
  }, [theme]);
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleToggle}
          checked={theme === "dark"}
        />
        <div
          className={`w-11 h-6 bg-gray-500 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all ${themeBaseClassName}`}
        ></div>
      </label>
    </div>
  );
};

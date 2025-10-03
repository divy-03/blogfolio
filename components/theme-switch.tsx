"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return theme === "dark" ? (
    <button
      onClick={() => setTheme("light")}
      className="flex items-center justify-center w-7 h-7  bg-white dark:bg-zinc-950 shadow-md transition-shadow duration-300"
    >
      <SunIcon />
    </button>
  ) : (
    <button
      onClick={() => setTheme("dark")}
      className="flex items-center justify-center  bg-white dark:bg-zinc-950  transition-shadow duration-300"
    >
      <MoonIcon />
    </button>
  );
};

export default ThemeSwitch;
"use client";

import { useEffect } from "react";
import { MoonIcon, SunIcon } from "../Icons";

const ThemeSwitch = () => {
  const toDarkMode = () => {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  };

  const toLightMode = () => {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  };

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUCS
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div>
      <button
        id="header__sun"
        onClick={toDarkMode}
        title="Switch to dark mode"
        className="focus:shadow-outline relative flex h-10 w-10 animate-fade-in items-center justify-center dark:hidden"
      >
        <SunIcon />
      </button>

      <button
        id="header__moon"
        onClick={toLightMode}
        title="Switch to light mode"
        className="focus:shadow-outline relative hidden h-10 w-10 animate-fade-in items-center justify-center dark:flex"
      >
        <MoonIcon />
      </button>
    </div>
  );
};

export default ThemeSwitch;

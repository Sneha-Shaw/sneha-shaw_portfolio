import React, { createContext, useState, useEffect } from "react";
import { CiSun } from "react-icons/ci";
import { IoMdLaptop } from "react-icons/io";
import { PiMoonStars } from "react-icons/pi";
import "./theme.css";

const ThemeContext = createContext();

export const themes = [
  {
    label: "Light",
    value: "light",
    icon: <CiSun />,
  },
  {
    label: "Dark",
    value: "dark",
    icon: <PiMoonStars />,
  },
  {
    label: "System",
    value: "system",
    icon: <IoMdLaptop />,
  },
];

const SystemThemeProvider = ({ children }) => {
  const [selection, setSelection] = useState("light");

  useEffect(() => {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setSelection("dark")
      : setSelection("light");
  }, []);

  const mqListener = (e) => {
    if (e.matches) {
      setSelection("dark");
    } else {
      setSelection("light");
    }
  };

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", mqListener);
    return () => {
      darkThemeMq.removeEventListener("change", mqListener);
    };
  }, []);

  const toggleTheme = (value) => {
    if (value == "system") {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setSelection("dark")
        : setSelection("light");

      return;
    }
    setSelection(value);
  };

  return (
    <ThemeContext.Provider value={{ selection, toggleTheme }}>
      <div className={selection}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { SystemThemeProvider, ThemeContext };

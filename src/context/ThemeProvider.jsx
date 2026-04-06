import React, { createContext, useState, useEffect } from "react";
import "./theme.css";

const ThemeContext = createContext();
const STORAGE_KEY = "theme-selection";

const getSystemTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const SystemThemeProvider = ({ children }) => {
  const [selection, setSelection] = useState(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    return localStorage.getItem(STORAGE_KEY) || "system";
  });

  const [activeTheme, setActiveTheme] = useState(() =>
    selection === "system" ? getSystemTheme() : selection
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, selection);
  }, [selection]);

  useEffect(() => {
    if (selection !== "system") {
      setActiveTheme(selection);
      return undefined;
    }

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (event) => {
      setActiveTheme(event.matches ? "dark" : "light");
    };

    setActiveTheme(darkThemeMq.matches ? "dark" : "light");
    darkThemeMq.addEventListener("change", handleThemeChange);

    return () => {
      darkThemeMq.removeEventListener("change", handleThemeChange);
    };
  }, [selection]);

  const toggleTheme = (value) => {
    setSelection(value);
  };

  return (
    <ThemeContext.Provider value={{ selection, activeTheme, toggleTheme }}>
      <div className={activeTheme}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { SystemThemeProvider, ThemeContext };

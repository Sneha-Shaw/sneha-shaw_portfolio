import { useContext } from "react";
import { CiSun } from "react-icons/ci";
import { PiMoonStars } from "react-icons/pi";
import { ThemeContext } from "../../context/ThemeProvider";

export default function ThemeSwitch() {
  const { activeTheme, toggleTheme } = useContext(ThemeContext);
  const isDark = activeTheme === "dark";

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      onClick={() => toggleTheme(isDark ? "light" : "dark")}
      className={`theme-toggle ${isDark ? "is-dark" : "is-light"}`}
    >
      <span className={`theme-toggle__icon ${!isDark ? "is-active" : ""}`}>
        <CiSun />
      </span>
      <span className="theme-toggle__track">
        <span className="theme-toggle__thumb" />
      </span>
      <span className={`theme-toggle__icon ${isDark ? "is-active" : ""}`}>
        <PiMoonStars />
      </span>
    </button>
  );
}

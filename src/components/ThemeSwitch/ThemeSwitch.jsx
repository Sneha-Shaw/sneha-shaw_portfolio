import { ListItem, Popover } from "@mui/material";
import { useState, useContext } from "react";
import { themes, ThemeContext } from "../../context/ThemeProvider";

export default function ThemeSwitch() {
  const [anchorEl, setAnchorEl] = useState(null);

  const { selection, toggleTheme } = useContext(ThemeContext);

  const open = Boolean(anchorEl);
  const selectedIcon = themes.find((theme) => theme.value === selection).icon;
  return (
    <>
      <button
        onClick={(event) => setAnchorEl(event.currentTarget)}
        className="text-2xl text-[#FF4191]"
      >
        {selectedIcon}
      </button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        {themes.map((theme, index) => {
          return (
            <ListItem
              key={index}
              className={`gap-1 bg-white hover:bg-slate-100 hover:text-[#FF4191] ${
                selection === theme.value ? "text-[#FF4191]" : ""
              } cursor-pointer`}
              onClick={() => {
                toggleTheme(theme.value);
                setAnchorEl(null);
              }}
            >
              {theme.icon}
              {theme.label}
            </ListItem>
          );
        })}
      </Popover>
    </>
  );
}

import {
  Button,
  ListItem,
  MenuItem,
  Popover,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { CiSun } from "react-icons/ci";
import { IoMdLaptop } from "react-icons/io";
import { PiMoonStars } from "react-icons/pi";

const themes = [
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

export default function ThemeSwitch() {
  const [selection, setSelection] = useState("light");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (value) => {
    if (value == "system") {
      setSelection("dark");
      setAnchorEl(null);
      return;
    }
    setSelection(value);
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const selectedIcon = themes.find((theme) => theme.value === selection).icon;
  return (
    <>
      <button
        onClick={(event) => setAnchorEl(event.currentTarget)}
        className="text-2xl text-pink-500"
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
              className="gap-1 bg-white hover:bg-slate-100 hover:text-pink-500 cursor-pointer"
              onClick={() => {
                handleChange(theme.value);
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

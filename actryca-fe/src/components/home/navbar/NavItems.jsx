import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { BookOpenText, Drama } from "lucide-react";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Stack } from "@mui/material";
import navItems from "@/components/home/navbar/navItems.json";
import Link from "next/link";
import { handleScroll } from "@/utils/utils";

const activeStyle = "border-b-2 border-b-primary-800";

const NavItems = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Stack
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "32px",
      }}
      className="font-sans font-medium text-[16px]"
    >
      {navItems.map((item) => {
        return item.children ? (
          <Stack key={item.name}>
            <Link
              href=""
              aria-controls={anchorEl ? "menu-list" : undefined}
              aria-haspopup="true"
              aria-expanded={anchorEl ? "true" : undefined}
              onClick={handleClick}
              className={`${
                item.current ? activeStyle : ""
              } text-primary-800 hover:border-b-2 hover:border-b-primary-800 h-8 flex`}
            >
              {item.name}
              <KeyboardArrowDownRoundedIcon />
            </Link>
            <Menu
              id="menu-list"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                borderRadius: "32px",
              }}
            >
              {item.children.map((child) => (
                <MenuItem
                  key={child.name}
                  onClick={handleClose}
                  className="hover:bg-primary-50 rounded-lg m-2"
                >
                  <Link
                    href={child.href}
                    className="center gap-4 !justify-between text-primary-600 "
                  >
                    {child.name === "Senaristler" ? (
                      <BookOpenText strokeWidth={1.5} />
                    ) : (
                      <Drama strokeWidth={1.5} />
                    )}
                    {child.name} <ArrowForwardRoundedIcon />
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        ) : (
          <Link
            key={item.name}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            aria-current={item.current ? "page" : undefined}
            className={`${
              item.current ? activeStyle : ""
            } text-primary-800 hover:border-b-2 hover:border-b-primary-800 h-8`}
          >
            {item.name}
          </Link>
        );
      })}
    </Stack>
  );
};

export default NavItems;

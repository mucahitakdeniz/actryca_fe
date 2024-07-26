import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ChevronDown } from "lucide-react";
import { Stack, useMediaQuery } from "@mui/material";
import navigation from "@/components/home/navbar/(nav-item)/navigation";
import Image from "next/image";
import { Icon1, Icon2 } from "./Icons";
import Link from "next/link";

const activeStyle = "border-b-2 border-b-primary-800";

const NavItem = () => {
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {navigation.map((item) => {
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
              } text-primary-800 hover:border-b-2 hover:border-b-primary-800 h-8 center gap-x-2`}
            >
              {item.name}
              <ChevronDown size={20} strokeWidth={1.5} />
            </Link>
            <Menu
              id="menu-list"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  display: "inline-flex",
                  padding: "12px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "10px",
                  borderRadius: "16px",
                  boxShadow: "0px 0px 11px 0px rgba(0, 0, 0, 0.10)",
                  transformOrigin: "top center",
                },
              }}
            >
              {item.children.map((child) => (
                <MenuItem
                  key={child.name}
                  onClick={handleClose}
                  className="hover:bg-primary-50 rounded-lg mb-2"
                >
                  <Link
                    href={child.href}
                    className="center gap-4 !justify-between text-primary-600 "
                  >
                    {child.name === "Senaristler" ? <Icon1 /> : <Icon2 />}
                    {child.name}
                    <Image
                      src="/images/dropdownsvg/arrow.svg"
                      alt="Arrow Icon"
                      height={16}
                      width={16}
                    />
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Stack>
        ) : (
          <Link
            key={item.name}
            href={item.href}
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

export default NavItem;

"use client";
import { useState } from "react";
import {
  AppBar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import navItems from "@/components/home/navbar/navItems.json";
import Image from "next/image";
import Link from "next/link";
import LoginSection from "./LoginSection";
import NavItems from "./NavItems";

export default function Example() {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      <AppBar
        className="padding py-4 static shadow-sm"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Actryca Logo"
            height={32}
            width={128}
            className="h-auto"
          />
        </Link>
        <NavItems />
        <Box className="flex gap-4">
          <LoginSection />
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerClose}
        anchor="right"
      >
        <div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <List>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name}>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                >
                  {item.name}
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={menuAnchor}
                  keepMounted
                  open={Boolean(menuAnchor)}
                  onClose={handleMenuClose}
                  disableScrollLock
                >
                  {item.children.map((child) => (
                    <MenuItem key={child.name} onClick={handleMenuClose}>
                      <ListItemText primary={child.name} />
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : (
              <ListItem key={item.name} component="a" href={item.href}>
                <ListItemText primary={item.name} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
}

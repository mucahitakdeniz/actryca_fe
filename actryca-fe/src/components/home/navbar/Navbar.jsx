"use client";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Nav_item from "@/components/home/navbar/(nav-item)/Nav_item";
import Section3 from "@/components/home/navbar/(nav-item)/Section3";
import Logo from "@/components/home/navbar/(nav-item)/Logo";
import navigation from "@/components/home/navbar/(nav-item)/navigation";

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
        className="padding flex-row justify-between items-center py-4 bg-white static shadow-none"
      >
        <Logo />
        <Nav_item />
        <Section3 />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerOpen}
          className="sm:hidden"
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer
        variant="temporary"
        open={drawerOpen}
        onClose={handleDrawerClose}
        anchor="right"
        className="sm:hidden"
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
          {navigation.map((item) =>
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
                >
                  {item.children.map((child) => (
                    <MenuItem key={child.name} onClick={handleMenuClose}>
                      <ListItemText primary={child.name} />
                    </MenuItem>
                  ))}
                </Menu>
              </div>
            ) : (
              <ListItem button key={item.name} component="a" href={item.href}>
                <ListItemText primary={item.name} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
}

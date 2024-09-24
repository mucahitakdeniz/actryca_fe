import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  Bookmark,
  BookOpenText,
  LogOut,
  Search,
  Settings,
  SquareActivity,
  UserCog,
} from "lucide-react";
import Link from "next/link";
import useAuthStore from "@/store/auth-store";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { AccountCircle } from "@mui/icons-material";
import { UserRoundPen } from "lucide-react";

const LoginSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const [anchorEl, setAnchorEl] = useState(null);

  console.log(user);
  
  const handleLogout = () => {
    logout();
    localStorage.clear();
    handleClose(); // Logout olduktan sonra menü kapanacak
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget); // Sadece menü butonuna tıklandığında açılmasını sağlıyoruz
  };

  const handleClose = () => {
    setAnchorEl(null); // Menü kapatıldığında anchorEl'i sıfırlıyoruz
  };

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    !isMobile && (
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
        alignItems="center"
        gap="24px"
      >
        <Search
          width={20}
          height={20}
          strokeWidth={1.5}
          onClick={handleSearchClick}
          className="text-primary-800 cursor-pointer"
        />
        {user ? (
          <div className="center">
            <IconButton className="text-primary-900">
              <Bookmark strokeWidth={1.5} />
            </IconButton>
            <Typography className="text-primary-900 ml-3">
              {user?.data?.user_name || "?"}
            </Typography>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar className="bg-primary-100 text-primary-900">
                {user?.data?.user_name.toUpperCase()[0] || "?"}
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              sx={{
                borderRadius: "32px",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                className="hover:bg-primary-50 rounded-lg m-2"
                onClick={handleClose}
              >
                <Link
                  href="/profile"
                  className="center gap-4 !justify-between "
                >
                  <UserCog strokeWidth={1.5} />
                  Kullanıcı Bilgileri
                </Link>
              </MenuItem>
              <MenuItem
                className="hover:bg-primary-50 rounded-lg m-2"
                onClick={handleClose}
              >
                <Link
                  href="/profile"
                  className="center gap-4 !justify-between  "
                >
                  <SquareActivity strokeWidth={1.5} />
                  Hareketlerin
                </Link>
              </MenuItem>
              <MenuItem
                className="hover:bg-primary-50 rounded-lg m-2"
                onClick={handleClose}
              >
                <Link
                  href="/profile"
                  className="center gap-4 !justify-between  "
                >
                  <Settings strokeWidth={1.5} />
                  Ayarlar
                </Link>
              </MenuItem>
              <MenuItem
                className="hover:bg-primary-50 rounded-lg m-2 gap-4 "
                onClick={handleLogout}
              >
                <LogOut strokeWidth={1.5} />
                Çıkış Yap
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Box display="flex" alignItems="center" gap={1}>
            <Button className="px-8 py-4 font-sans font-bold h-12">
              <Link href="/login">Giriş Yap</Link>
            </Button>

            <Button className="px-8 py-4 font-sans font-bold h-12 bg-primary-600 text-white hover:bg-primary-500">
              <Link href="/register">Üye Ol</Link>
            </Button>
          </Box>
        )}

        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: "fixed",
              width: 500,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              p: 4,
              borderRadius: "16px",
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" mb={2}>
              Arama Yap
            </Typography>
            <TextField
              placeholder="Arama..."
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button onClick={handleCloseModal} sx={{ alignSelf: "flex-end" }}>
              Kapat
            </Button>
          </Box>
        </Modal>
      </Box>
    )
  );
};

export default LoginSection;

import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Search, UserRound } from "lucide-react";
import Link from "next/link";
import useAuthStore from "@/store/auth-store";

const LoginSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuthStore();
  console.log(user);

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
        gap={1}
      >
        <Search
          width={20}
          height={20}
          strokeWidth={1.5}
          onClick={handleSearchClick}
          className="text-primary-800 cursor-pointer"
        />
        {user ? (
          <IconButton>
            <Link href="/login">
              <UserRound strokeWidth={1.5} />
            </Link>
          </IconButton>
        ) : (
          <Box display="flex" alignItems="center" gap={1}>
            <Button>
              <Link href="/login">Giriş Yap</Link>
            </Button>

            <Button variant="contained">
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

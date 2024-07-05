import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Image
        src="/images/logo.svg"
        alt="Your Company"
        height={32}
        width={128}
      />
    </Box>
  );
};

export default Logo;

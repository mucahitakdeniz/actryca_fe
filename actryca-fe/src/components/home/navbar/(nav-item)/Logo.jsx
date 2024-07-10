import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box>
      <Link href="/">       
          <Image
            src="/images/logo.svg"
            alt="Your Company"
            height={32}
            width={128}
          />      
      </Link>
    </Box>
  );
};

export default Logo;

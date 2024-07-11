import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.svg"
        alt="Your Company"
        height={32}
        width={128}
      />
    </Link>
  );
};

export default Logo;

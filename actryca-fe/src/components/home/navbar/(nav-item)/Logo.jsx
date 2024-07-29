import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.svg"
        alt="Your Company"
        height={32}
        width={128}
        className="w-32 h-auto"
      />
    </Link>
  );
};

export default Logo;

import LogoImg from "@/public/lws-logo-black.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href="/">
        <Image className="h-10 w-auto" src={LogoImg} alt="Logo" priority />
      </Link>
    </div>
  );
}

export default Logo;

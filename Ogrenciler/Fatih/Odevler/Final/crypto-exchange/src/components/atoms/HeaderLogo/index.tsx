"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const HeaderLogo = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const logoSrc =
    theme === "dark" ? "/global/logo-dark.png" : "/global/logo.svg";

  return <Image src={logoSrc} width={120} height={32} alt="Logo" priority />;
};

export default HeaderLogo;

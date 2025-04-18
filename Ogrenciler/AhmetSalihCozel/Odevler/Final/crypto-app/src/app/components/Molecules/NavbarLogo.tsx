import React from "react";
import Typography from "../Atoms/Typography/Typography";
import Image from "next/image";

type prop = {
  className?: string;
};

const NavbarLogo: React.FC<prop> = ({ className }) => {
  return (
    <div className={className}>
      <Image src="/svg/logo.svg" alt="logo" height={24} width={24} />
      <Typography variant="head-5">Rocket</Typography>
    </div>
  );
};

export default NavbarLogo;

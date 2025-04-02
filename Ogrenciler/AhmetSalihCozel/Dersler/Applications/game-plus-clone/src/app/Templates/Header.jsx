import React from "react";
import NavBarNavList from "../Molecules/NavBarNavList";
import Image from "next/image";
import Button from "../Atoms/Button";

const Header = () => {
  return (
    <div className="w-full h-30 flex justify-between items-center p-5">
      <div className="flex">
        <Image
          src="/img/logo-desktop-dark.webp"
          width={214}
          height={50}
          style={{ objectFit: "contain" }}
          alt="Logo"
        />
        <NavBarNavList />
      </div>
      <Button variant="outlined" className="w-50 items-center text-center">Giriş Yap</Button>
    </div>
  );
};

export default Header;

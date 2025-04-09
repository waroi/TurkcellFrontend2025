"use client";
import React from "react";
import NavBarNavList from "../Molecules/NavBarNavList";
import Image from "next/image";
import Button from "../Atoms/Button";
import {useSideBarStore} from "../Store/ComCom";
import BootIcon from "../Atoms/BootIcon";

const Header = () => {
  const { toggleSideBar } = useSideBarStore();
  const { isSideClosed } = useSideBarStore();


  return (
    <div className="w-full h-30 flex justify-between items-center p-5">
      <div className="flex items-center">
        <BootIcon
          className={`cursor-pointer ${isSideClosed ? "block" : "hidden"}`}
          onClick={toggleSideBar}
          iconName={"list"}
          size={40}
        />
        <Image
          className="hidden md:block"
          src="/img/logo-desktop-dark.webp"
          width={214}
          height={50}
          style={{ objectFit: "contain" }}
          alt="Logo"
        />
        <NavBarNavList className="hidden xl:flex" />
      </div>
      <Button
        variant="outlined"
        className="w-50 items-center text-center"
      >
        Giriş Yap
      </Button>
    </div>
  );
};

export default Header;

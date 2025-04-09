"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import SideBarNavList from "../Molecules/SideBarNavList";
import SideBarImageSelection from "../Molecules/SideBarImageSelection";
import NavBarNavList from "../Molecules/NavBarNavList";
import {useSideBarStore} from "../Store/ComCom";


function SideBar() {
  const { isSideClosed, setIsSideClosed } = useSideBarStore();
  const ref = useRef();
  const handleResize = () => window.innerWidth < 768 ? setIsSideClosed(true) : setIsSideClosed(false);

  const handleClickOutside = (event) => {
    if (window.innerWidth < 768 && ref.current && !ref.current.contains(event.target)) {
      setIsSideClosed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSideClosed]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = isSideClosed ? "translateX(-100%)" : "translateX(0)";
    }
  }, [isSideClosed]);

  return (
    <div
      ref={ref}
      className={`h-screen w-50 bg-zinc-900 fixed left-0 top-0 transition-transform duration-300 z-50 ${
        isSideClosed ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <Link className="flex justify-center" href="/" passHref>
        <img className="mt-8" src="/svg/GamePlusBrand.svg" alt="GamePlus Logo" />
      </Link>
      <SideBarNavList />
      <SideBarImageSelection />
      <NavBarNavList className="block flex-col xl:hidden" />
    </div>
  );
}

export default SideBar;

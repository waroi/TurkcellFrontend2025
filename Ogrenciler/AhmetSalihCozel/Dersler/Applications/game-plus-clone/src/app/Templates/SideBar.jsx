import React from "react";
import Link from "next/link";
import SideBarNavList from "../Molecules/SideBarNavList";
import SideBarImageSelection from "../Molecules/SideBarImageSelection";

function SideBar() {
  return (
    <div className="h-screen w-50 bg-zinc-900 fixed left-0 top-0">
      <Link className="flex justify-center" href="/" passHref>
        <img className="mt-8" src="/svg/GamePlusBrand.svg" alt="GamePlus Logo" />
      </Link>
      <SideBarNavList />
      <SideBarImageSelection />
    </div>
  );
}
export default SideBar;

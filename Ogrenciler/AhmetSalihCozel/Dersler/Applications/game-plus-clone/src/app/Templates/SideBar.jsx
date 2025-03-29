import React from "react";
import Typography from "../Atoms/Typography";
import BootIcon from "../Atoms/BootIcon";
import Link from "next/link";

function SideBar() {
  return (
    <div className="h-screen bg-zinc-900">
    <Link className="flex justify-center" href="/" passHref>
        <img className="mt-8" src="/GamePlusBrand.svg"/>
    </Link>
      <ul className="list-none p-3">
        <li className="flex items-center">
          <BootIcon iconName={"house"} size={30} className={"text-zinc-500"} />
          <Typography variant="p" className="text-zinc-500">Ana Sayfa</Typography>
        </li>
        <li className="flex items-center">
          <BootIcon iconName={"grid"} size={30} className={"text-zinc-500"}/>
          <Typography variant="p" className="text-zinc-500">GAME+ Blog</Typography>
        </li>
        <li className="flex items-center">
          <BootIcon iconName={"star"} size={30} className={"text-zinc-500"}/>
          <Typography variant="p" className="text-zinc-500">Kampanyalar</Typography>
        </li>
        <li className="flex items-center">
          <BootIcon iconName={"lightning-charge"} size={30} className={"text-zinc-500"}/>
          <Typography variant="p" className="text-zinc-500">Destek</Typography>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;

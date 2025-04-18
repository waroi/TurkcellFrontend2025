"use client";
import React from "react";
import "./Head.scss";
import NavbarLogo from "../../Molecules/NavbarLogo";
import ListMapper from "../../Molecules/ListMappper";
import useNavbarNavList from "@/app/hooks/useNavbarNavList";
import useNavbarControls from "@/app/hooks/useNavbarControls";
import Link from "next/link";

const Head: React.FC = () => {
  const { listItems } = useNavbarNavList();
  const { listControlItems } = useNavbarControls();

  //
  return (
    <nav className="flex justify-between items-center">
      <div className="flex h-full">
        <Link href="/"><NavbarLogo className="flex justify-center items-center gap-8 ml-40"/></Link>
        <ListMapper liClassName="h-full flex justify-center items-center gap-4" ulClassName="flex gap-32 h-full ml-40" listItems={listItems}/>
      </div>
      <ListMapper liClassName="h-full flex justify-center items-center gap-4" ulClassName="flex justify-center items-center gap-28 h-full mr-40" listItems={listControlItems}/>
    </nav>
  );
};

export default Head;

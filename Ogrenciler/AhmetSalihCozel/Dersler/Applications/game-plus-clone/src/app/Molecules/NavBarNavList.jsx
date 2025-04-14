"use client";
import React from "react";
import Typography from "../Atoms/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBarNavList({className}) {
  const pathname = usePathname();
  const listItems = [
    { innerText: "Oyunlar", url: "/oyunlar" },
    { innerText: "Paketler", url: "/paketler" },
    { innerText: "İndir ve Oyna", url: "/indir-ve-oyna" },
    { innerText: "Nasıl Çalışır?", url: "/geforce-now-nedir" },
  ];

  return (
    <ul className={`flex ${className} gap-3 p-0 my-8 ms-8`}>
      {listItems.map((listItem, index) => (
          <Link
            key={index}
            className="focus-visible:border-3 focus:border-rose-500"
            href={listItem.url}
          >
            <li
              className={`flex items-center cursor-pointer ${
                pathname === listItem.url ? "text-lime-500" : "text-zinc-500"
              }`}
            >
              <Typography variant="p">{listItem.innerText}</Typography>
            </li>
          </Link>
      ))}
    </ul>
  );
}

export default NavBarNavList;

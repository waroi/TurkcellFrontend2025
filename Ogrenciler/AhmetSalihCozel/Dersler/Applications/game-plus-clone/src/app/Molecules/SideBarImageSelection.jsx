"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function SideBarImageSelection() {
  const [selected, setSelected] = useState(null);

  const items = [
    { href: "/gfn", src: "/img/geforcenow-menu.webp", alt: "Geforce Now" },
    { href: "/gfn", src: "/img/ubisoft-menu.webp", alt: "Ubisoft" },
  ];

  return (
    <div className="flex flex-col gap-2 py-10 items-center border-t border-b border-gray-700">
      {items.map((item, index) => (
        <Link key={index} href={item.href} onClick={() => setSelected(index)}>
          <Image
            className={`border rounded-md hover:border-yellow-500 ${
              selected === index ? "border-yellow-500" : ""
            }`}
            width={156}
            height={80}
            src={item.src}
            alt={item.alt}
          />
        </Link>
      ))}
    </div>
  );
}

export default SideBarImageSelection;

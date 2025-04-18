"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { firstMenuItems, secondMenuItems } from "@/constants/cryptoCategory";

function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="d-xl-none d-block w-100 bg-white rounded-2 px-3 py-2 mb-4">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Dashboard</h5>
        <button
          className="btn btn-outline-secondary"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Image
            src="/arrow-down.svg"
            alt="menu"
            width={20}
            height={20}
          />
        </button>
      </div>

      {isOpen && (
        <div className="mt-3">
          {[...firstMenuItems, ...secondMenuItems].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-decoration-none"
              onClick={() => setIsOpen(false)}
            >
              <Button
                className={`d-flex align-items-center justify-content-between w-100 text-start mb-2 ${
                  pathname.includes(item.href)
                    ? "btn-primary text-white"
                    : "btn-white text-muted"
                }`}
              >
                <div className="d-flex align-items-center gap-2">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="img-fluid"
                  />
                  {item.name}
                </div>
                {item.dropdown && (
                  <Image
                    src="/dropdown.svg"
                    alt="Dropdown"
                    width={12}
                    height={12}
                    className="img-fluid"
                  />
                )}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MobileSidebar;
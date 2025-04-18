import Link from "next/link";
import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { firstMenuItems, secondMenuItems } from "@/constants/cryptoCategory";
import { useTranslations } from "next-intl";

function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <div
      className="col-2 flex-column gap-1 pt-5 position-fixed bg-white d-none d-xl-flex"
      style={{ height: "100vh" }}
    >
      {firstMenuItems.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className="text-decoration-none"
          >
            <Button
              className={`d-flex align-items-center justify-content-between w-100 text-start ${
                pathname.includes(item.href)
                  ? "btn-primary text-white"
                  : "btn-white text-muted"
              }`}
            >
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={item.icon}
                  alt={t(item.name)}
                  width={20}
                  height={20}
                  className="img-fluid"
                />
                {t(item.name)}
              </div>
              {item.dropdown && (
                <Image
                  src="/dropdown.svg"
                  alt={t("Dropdown")}
                  width={12}
                  height={12}
                  className="img-fluid"
                />
              )}
            </Button>
          </Link>
        );
      })}
      <hr />
      {secondMenuItems.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className="text-decoration-none"
          >
            <Button
              className={`d-flex align-items-center justify-content-between w-100 text-start ${
                pathname.endsWith(item.href)
                  ? "btn-primary text-white"
                  : "btn-white text-muted"
              }`}
            >
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={item.icon}
                  alt={t(item.name)}
                  width={20}
                  height={20}
                  className="img-fluid"
                />
                {t(item.name)}
              </div>
              {item.dropdown && (
                <Image
                  src="/dropdown.svg"
                  alt={t("Dropdown")}
                  width={12}
                  height={12}
                  className="img-fluid"
                />
              )}
            </Button>
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useState } from "react";

const locales = routing.locales;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = pathname.split("/")[1];

  const handleChangeLocale = (locale: string) => {
    if (locale === currentLocale) return;
    router.push(pathname, { locale });
    setIsOpen(false);
  };

  return (
    <li className="nav-item position-relative">
      <button
        className="btn btn-white rounded-4 px-3 py-2"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        TR/EN ▾
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu show position-absolute mt-1"
          style={{
            display: "block",
            minWidth: "100px",
            zIndex: 9999,
          }}
        >
          {locales.map((locale) => (
            <li key={locale}>
              <button
                className={`dropdown-item px-3 py-2 ${
                  locale === currentLocale ? "disabled" : ""
                }`}
                onClick={() => handleChangeLocale(locale)}
              >
                {locale.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import LanguageSelect from "@/components/atoms/LanguageSelect";
import Notifications from "@/assets/notifications.svg";
import styles from "../Header/Header.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import WalletButton from "@/components/atoms/WalletButton";

const UserTools = ({ links }: { links: { href: string; label: string }[] }) => {
  const pathname = usePathname();
  const user = useSelector((state: RootState) => state.auth.user);
  const avatarUrl = user?.photoURL || "/global/user.png";

  return (
    <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
      {links.map(({ href, label }) => (
        <Link
          key={href + label}
          className={`nav-link ${pathname === href ? styles.activeLink : ""}`}
          href={href}
        >
          {label}
        </Link>
      ))}

      <LanguageSelect />
      <ThemeToggle />
      <Image
        src={Notifications}
        width={16}
        height={16}
        alt="Notifications"
        className={styles.notificationIcon}
      />
      <Link href="/wallet" className="d-inline-block">
        <WalletButton>Wallet</WalletButton>
      </Link>
      <Link href="/user">
        <Image
          src={avatarUrl}
          alt="avatar"
          width={32}
          height={32}
          className={styles.avatar}
        />
      </Link>
    </div>
  );
};

export default UserTools;

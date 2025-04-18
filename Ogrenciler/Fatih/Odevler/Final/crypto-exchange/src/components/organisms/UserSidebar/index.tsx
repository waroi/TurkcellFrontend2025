"use client";

import React from "react";
import Image from "next/image";
import styles from "./UserSidebar.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

interface SidebarProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

const UserSidebar = ({ activeTab, onChange }: SidebarProps) => {
  const t = useTranslations("UserPage");
  const user = useSelector((state: RootState) => state.auth.user);

  const items = [
    { key: "profile", icon: "profile" },
    { key: "referrals", icon: "referrals" },
    { key: "apiKeys", icon: "api" },
    { key: "loginHistory", icon: "history" },
    { key: "twoFactor", icon: "2fa" },
    { key: "changePassword", icon: "change" },
  ];

  return (
    <div className={`rounded-4 p-4 ${styles.sidebar}`}>
      <div className="text-center mb-3">
        <div className={styles.avatarWrapper}>
          <Image
            src={user?.photoURL || "/global/avatar.svg"}
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-circle"
          />
        </div>

        <h6 className={`${styles.title} mt-2 fw-bold mb-1`}>
          {user?.displayName || "User Name"}
        </h6>
        <p className={`${styles.text} small mb-0 `}>
          {user?.email || "example@mail.com"}
        </p>
      </div>

      <ul className="list-unstyled mt-4">
        {items.map((item) => (
          <MenuItem
            key={item.key}
            icon={item.icon}
            label={t(item.key)}
            active={activeTab === item.key}
            onClick={() => onChange(item.key)}
          />
        ))}
      </ul>
    </div>
  );
};

const MenuItem = ({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  const iconSrc = `/profile/${icon}${active ? "-dark" : ""}.svg`;

  return (
    <li
      className={`d-flex align-items-center gap-2 px-3 py-2 rounded-3 ${
        active ? "bg-primary text-white fw-semibold" : ` ${styles.inactive}`
      }`}
      style={{ cursor: "pointer" }}
      onClick={onClick}
    >
      <Image src={iconSrc} alt={label} width={18} height={18} />
      <span>{label}</span>
    </li>
  );
};

export default UserSidebar;

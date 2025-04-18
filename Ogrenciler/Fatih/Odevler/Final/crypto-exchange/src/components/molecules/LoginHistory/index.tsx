"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import styles from "./LoginHistory.module.css";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const sessions = [
  {
    device: "/profile/tablet.png",
    date: "2021-06-16 10:46:09",
    ip: "104.28.12.57",
    twoFA: true,
    location: "5543 Aliquet St. Fort Dodge GA 20783",
    user: "Bryar Pitts",
  },
  {
    device: "/profile/pc.png",
    date: "2021-06-16 10:46:09",
    ip: "104.28.12.57",
    twoFA: false,
    location: "5543 Aliquet St. Fort Dodge GA 20783",
    user: "Bryar Pitts",
  },
  {
    device: "/profile/phone.png",
    date: "2021-06-16 10:46:09",
    ip: "104.28.12.57",
    twoFA: true,
    location: "5543 Aliquet St. Fort Dodge GA 20783",
    user: "Bryar Pitts",
  },
];

const LoginHistory = () => {
  const t = useTranslations("LoginHistory");
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className="rounded-4 p-4 shadow-sm">
      <section className="mb-5">
        <h5 className={`${styles.title} fw-bold`}>{t("activeSessions")}</h5>
        <p className={`${styles.text} small`}>{t("activeDescription")}</p>
        <SessionTable sessions={sessions} theme={theme} />
        <div className="mt-3 w-25">
          <Button variant="outline">{t("logoutAll")}</Button>
        </div>
      </section>

      <section>
        <h5 className={`${styles.title} fw-bold`}>{t("loginHistory")}</h5>
        <p className={`${styles.text} small`}>{t("loginDescription")}</p>
        <SessionTable sessions={sessions} theme={theme} />
      </section>
    </div>
  );
};

const SessionTable = ({
  sessions,
  theme,
}: {
  sessions: typeof sessions;
  theme: string;
}) => {
  const t = useTranslations("LoginHistory");

  return (
    <div className="table-responsive">
      <table
        className={`table align-middle ${theme === "dark" ? "table-dark" : ""}`}
      >
        <thead className="text-muted small">
          <tr>
            <th>{t("device")}</th>
            <th>{t("date")}</th>
            <th>{t("ip")}</th>
            <th>{t("twoFA")}</th>
            <th>{t("location")}</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr key={index}>
              <td>
                <Image
                  src={session.device}
                  alt="Device"
                  width={30}
                  height={30}
                />
              </td>
              <td>{session.date}</td>
              <td>{session.ip}</td>
              <td>
                <span
                  className={`badge px-3 py-1 rounded-pill fw-semibold ${
                    session.twoFA
                      ? "bg-success-subtle text-success"
                      : "bg-danger-subtle text-danger"
                  }`}
                >
                  {session.twoFA ? t("yes") : t("no")}
                </span>
              </td>
              <td>
                <span className="fw-bold d-block">{session.user}</span>
                <small className="">{session.location}</small>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoginHistory;

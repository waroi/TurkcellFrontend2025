"use client";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { changeUserPassword, getUserWallet } from "@/firebase/firebaseService";
import useCryptoStore from "@/store/useCryptoStore";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const wallet = useCryptoStore((state) => state.wallet);
  const setWallet = useCryptoStore((state) => state.setWallet);
  const t = useTranslations()

  useEffect(() => {
    const fetchWallet = async () => {
      try {
        const res = await getUserWallet();
        setWallet(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching wallet data:", error);
      }
    };

    fetchWallet();
  }, []);

  const pathname = usePathname();
  const cleanPath = pathname.split("/").slice(2).join("/");

  const coins = Object.entries(wallet || {}).map(([symbol, data]) => ({
    symbol,
    coinId: data.coinId,
    name: symbol,
    value: data.value,
  }));

  return (
    <div className="bg-light min-vh-100 mt-5">
      <div className="row g-0">
        <div className="col-md-3 bg-white px-0 border-end">
          <div className="d-flex d-md-none justify-content-between align-items-center p-5">
            <div className="d-flex align-items-center gap-2">
              <Image
                src="/pp.jpg"
                alt="profile"
                className="rounded-circle"
                width={40}
                height={40}
              />
              <strong>Peterson Kennady</strong>
            </div>
            <button
              className="btn btn-outline-primary"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>

          <div
            className={`${
              menuOpen ? "d-flex" : "d-none"
            } d-md-flex flex-column align-items-center justify-content-center p-3 profile-settings-box`}
           
          >
            <div className="text-center mb-4 d-none d-md-block w-100">
              <Image
                src="/pp.jpg"
                alt="profile"
                className="rounded-circle mb-3"
                width={100}
                height={100}
              />
              <h6 className="fw-semibold mb-0">Peterson Kennady</h6>
              <p className="text-muted small">petersonkenn@demo.com</p>
            </div>

            <ul className="nav flex-column w-100 align-items-center">
              <li className="nav-item mb-2 w-75">
                <a
                  className={`nav-link fs-3 d-flex align-items-center gap-2 rounded-pill px-3 py-2 ${
                    cleanPath === "settings/wallet"
                      ? "bg-primary text-white"
                      : "text-dark"
                  }`}
                  href="/settings/wallet"
                >
                  <Image src="/user.svg" alt="wallet" width={24} height={24} />
                  {t("Wallet")}
                </a>
              </li>
              <li className="nav-item mb-2 w-75">
                <a
                  className={`nav-link fs-3 d-flex align-items-center gap-2 rounded-pill px-3 py-2 ${
                    cleanPath === "settings/change-password"
                      ? "bg-primary text-white"
                      : "text-dark"
                  }`}
                  href="/settings/change-password"
                >
                  <Image
                    src="/change-password.svg"
                    alt="wallet"
                    width={24}
                    height={24}
                  />
                  {t("Change Password")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="col-md-9 p-4 p-md-5 d-flex align-items-start justify-content-start flex-column gap-4 bg-white"
          style={{ minHeight: "50vh" }}
        >
          <h3 className="fs-1 fw-bold">{t("Wallet")}</h3>

          <table className="table align-middle">
            <thead>
              <tr>
                <th scope="col">Coin</th>
                <th scope="col" className="text-end">
                  {t("Amount")}
                </th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.symbol}>
                  <td className="py-3 d-flex align-items-center gap-3">
                    <Image
                      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.coinId}.png`}
                      width={32}
                      height={32}
                      alt={coin.name}
                    />
                    <span className="fw-semibold">{coin.name}</span>
                  </td>
                  <td className="py-3 text-success text-end fw-bold fs-2">
                    {coin.value} USD
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

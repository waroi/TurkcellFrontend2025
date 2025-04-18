"use client";

import styles from "./SecureLink.module.css";
import Image from "next/image";
import LockIcon from "@/assets/lock.svg";

const SecureLink = () => {
  return (
    <div className={styles.secureLink}>
      <div className={styles.iconWrapper}>
        <Image src={LockIcon} alt="Lock Icon" width={20} height={20} />
      </div>
      <p className={styles.text}>
        <span className={styles.green}>https://</span>
        <strong>accounts.rockie.com/login</strong>
      </p>
    </div>
  );
};

export default SecureLink;

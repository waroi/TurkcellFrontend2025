'use client'

import { useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/blog')
  }, [])

  return (
    <div className={styles.page}>
      <Link href={"/blog"}>Burada bir şey varsa orası da burasıdır bana tıkla...</Link>
    </div>
  );
}

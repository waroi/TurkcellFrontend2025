import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/homepage");
  return null;
}

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Latest from "@/components/Latest";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Latest />
      <Posts />
    </div>
  );
}

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import Latest from "@/components/Latest";
import Posts from "@/components/Posts";
import TripOfTheWeek from "@/components/TripOfTheWeek";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe/Subscribe";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Latest />
      <TripOfTheWeek />
      <Posts />
      <Subscribe />
      <Footer />
    </div>
  );
}

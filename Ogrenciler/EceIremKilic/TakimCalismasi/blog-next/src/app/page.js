import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
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

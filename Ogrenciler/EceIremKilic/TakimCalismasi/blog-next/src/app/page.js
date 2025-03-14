"use client";
import Navbar from "@/components/Navbar/Navbar";
import Banner from "@/components/Banner/Banner";
import Latest from "@/components/Latest";
import Posts from "@/components/Posts";
import TripOfTheWeek from "@/components/TripOfTheWeek";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe/Subscribe";
import useAuthStore from "@/store/useAuthStore";
// import { auth } from "@/firebase_config";
// import { browserLocalPersistence,setPersistence } from "firebase/auth";
export default function Home() {
  // setPersistence(auth, browserLocalPersistence)
  // .then(() => {
  //     console.log('Oturum kalıcılığı başarıyla ayarlandı.');
  // })
  // .catch((error) => {
  //     console.error('Oturum kalıcılığı ayarlanamadı: ', error);
  // }); //TODO Kullanıcının sürekli oturumda kalmasını sağlamaya çalıştım fakat olmadı gibi :/

  const { user } = useAuthStore();

  console.log("home user", user);

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

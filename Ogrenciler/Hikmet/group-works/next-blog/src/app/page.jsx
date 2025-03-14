import HomeContent from "@/components/HomeContent/HomeContent";
import Navbar from "@/components/Navbar/Navbar";



//! anasayfadaki veri getirme olayı useEffect ile farklı bir componentte denenecek ve state değiştiğinde yani useEffect dependency array değiştiğinde çalışacak

export default async function Home() {

	return (
		<>
			<Navbar />
			<HomeContent />
		</>
	);
}

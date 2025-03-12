import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function AddLayout({ children }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </>
  );
}

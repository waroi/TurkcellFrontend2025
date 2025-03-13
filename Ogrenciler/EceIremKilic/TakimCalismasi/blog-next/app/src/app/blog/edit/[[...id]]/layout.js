import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function EditLayout({ children }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </>
  );
}

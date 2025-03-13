import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function BlogLayout({ children }) {
  return (
    <>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </>
  );
}

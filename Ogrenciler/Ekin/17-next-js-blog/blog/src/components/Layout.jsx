import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Layout({ children, active }) {
  return (
    <>
      <Navigation active={active} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

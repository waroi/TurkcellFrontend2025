import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Layout({ children, active, mainClass = "" }) {
  return (
    <>
      <Navigation active={active} />
      <main className={mainClass}>{children}</main>
      <Footer />
    </>
  );
}

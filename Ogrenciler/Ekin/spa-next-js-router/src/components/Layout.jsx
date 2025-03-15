import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children, parameter }) => {
  return (
    <div>
      <h1>PARAM: {parameter}</h1>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

import "../main.scss";

const Add = ({ children }) => {
  return (
    <div>
      <Navigation active="add" />
      <main className="container py-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Add;

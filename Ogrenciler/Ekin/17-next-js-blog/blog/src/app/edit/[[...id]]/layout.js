import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

import "../../main.scss";

const Edit = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="container py-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Edit;

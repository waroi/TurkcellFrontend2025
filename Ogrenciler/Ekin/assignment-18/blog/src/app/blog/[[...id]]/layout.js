import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

import "../../main.scss";

const Blog = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Blog;

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import "@/main.scss";

export default ({ children, active, fill = false, bodyClassName = "" }) => {
  return (
    <div>
      <Navigation active={active} />
      <main className={`${fill ? "" : "container py-5"} ${bodyClassName}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

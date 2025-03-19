import { Route, Routes } from "react-router";
import AdayFormu from "../components/AdayFormu";
import PortalFormu from "../components/PortalFormu";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdayFormu />} />
        <Route path="/portal" element={<PortalFormu />} />
      </Routes>
    </>
  );
};

export default Router;

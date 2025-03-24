import { Outlet } from "react-router";
import WrapperCard from "../components/atoms/cards/WrapperCard";

const Auth = () => {
  return (
    <WrapperCard className="d-flex justify-content-center align-items-center">
      <Outlet />
    </WrapperCard>
  );
};

export default Auth;

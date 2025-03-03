import { Outlet } from "react-router";

const HaberView = () => {
    return (
        <>
            <h1>Haberler</h1>
            <Outlet />
        </>
    );
};

export default HaberView;
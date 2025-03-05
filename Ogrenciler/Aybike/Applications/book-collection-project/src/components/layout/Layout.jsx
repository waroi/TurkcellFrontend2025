import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import AdminHeader from "./AdminHeader";
import { useUser } from "../../context/UserContext";

const Layout = () => {
    const {user} = useUser();
	return (
		<>
        {(user === "User") ? <Header/> : <AdminHeader/> }
			    <Outlet />
			<Footer />
		</>
	);
};

export default Layout;
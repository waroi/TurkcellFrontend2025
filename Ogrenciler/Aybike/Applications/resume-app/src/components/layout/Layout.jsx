import { Outlet } from "react-router";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;

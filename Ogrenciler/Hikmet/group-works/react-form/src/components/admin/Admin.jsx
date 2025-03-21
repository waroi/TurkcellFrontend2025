import { useAdminAuth } from "../../hooks/useAdminAuth";
import AdminDashboard from "./AdminDashboard";

const Admin = () => {
	const { isAdmin, loading } = useAdminAuth();

	if (loading) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}>
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	if (!isAdmin) {
		return null;
	}

	return <AdminDashboard />;
};

export default Admin;

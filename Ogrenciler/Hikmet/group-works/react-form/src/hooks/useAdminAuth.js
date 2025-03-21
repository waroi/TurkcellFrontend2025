import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase/config";

export const useAdminAuth = () => {
	const [isAdmin, setIsAdmin] = useState(false);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const checkAdmin = () => {
			const unsubscribe = auth.onAuthStateChanged((user) => {
				if (!user || user.email !== "admin@admin.com") {
					navigate("/");
					setIsAdmin(false);
				} else {
					setIsAdmin(true);
				}
				setLoading(false);
			});

			return unsubscribe;
		};

		const unsubscribe = checkAdmin();
		return () => unsubscribe();
	}, [navigate]);

	return { isAdmin, loading };
};

import React from "react";
import { Route, Routes } from "react-router-dom";

const Routes = () => {
	return (
		<Routes>
			<Route path="/" element={<RecruitmentForm />} />
			<Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
		</Routes>
	);
};

export default Routes;

import React from "react";
import { Route, Routes } from "react-router";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import HomeView from "../../views/HomeView";
import AdminView from "../../views/AdminView";


const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<HomeView />} />
			<Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
			<Route path="/admin" element={<AdminView/>} />
		</Routes>
	);
};

export default Router;

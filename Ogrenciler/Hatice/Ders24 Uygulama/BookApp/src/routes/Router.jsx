import React from "react";
import { Routes, Route } from "react-router";
import HomePage from "../views/HomePage";
import DetailsPage from "../views/DetailsPage";
import SignupView from "../views/SignupView";
import LoginView from "../views/LoginView";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:id" element={<DetailsPage />} />
            <Route path="/signup" element={<SignupView />} />
            <Route path="/login" element={<LoginView />} />
        </Routes>
    );
};

export default AppRouter;
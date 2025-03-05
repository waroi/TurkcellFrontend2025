import React from "react";
import { Routes, Route } from "react-router"; 
import HomePage from "../views/HomePage";
import DetailsPage from "../views/DetailsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books/:id" element={<DetailsPage />} />
        </Routes>
    );
};

export default AppRouter;
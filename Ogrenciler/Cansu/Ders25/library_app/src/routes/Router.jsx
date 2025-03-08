import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Library from '../views/Library';
import DashBoard from '../views/DashBoard';
import BooksManager from '../views/BooksManager';
import Login from '../views/Login';
import Register from '../views/Register';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/books-manager" element={<BooksManager />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;




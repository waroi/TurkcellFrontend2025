import { Routes, Route, Navigate } from "react-router";
import LoginPage from "../../pages/Login";
import RegisterPage from "../../pages/Register";
import GamePage from "../../pages/Game";
import RoomSelectPage from "../../pages/RoomSelect";
import ProtectedRoute from "../ProtectedRoute";

const RouteWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/room-select"
        element={
          <ProtectedRoute>
            <RoomSelectPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/game/:gameId"
        element={
          <ProtectedRoute>
            <GamePage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RouteWrapper;

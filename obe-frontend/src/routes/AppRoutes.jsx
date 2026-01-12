import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import DashboardDosen from "../pages/dosen/Dashboard/DashboardDosen";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* DOSEN */}
      <Route path="/dosen/dashboard" element={<DashboardDosen />} />
    </Routes>
  );
}

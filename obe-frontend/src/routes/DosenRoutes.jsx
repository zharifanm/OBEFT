import { Routes, Route, Navigate } from "react-router-dom";
import DashboardDosen from "../pages/dosen/Dashboard/DashboardDosen";
import DaftarKelas from "../pages/dosen/Kelas/DaftarKelas";
import MonitoringCapaian from "../pages/dosen/Capaian/MonitoringCapaian";
import InputNilai from "../pages/dosen/Nilai/InputNilaiCPMK";
import SidebarDosen from "../pages/SidebarDosen/SidebarDosen";

export default function DosenRoutes() {
  return (
    <div style={{ display: "flex" }}>
      <SidebarDosen />

      <div style={{ flex: 1 }}>
        <Routes>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardDosen />} />
          <Route path="kelas" element={<DaftarKelas />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
          <Route path="capaian" element={<MonitoringCapaian />} />
          <Route path="nilai" element={<InputNilai />} />
        </Routes>
      </div>
    </div>
  );
}

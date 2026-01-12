import { BrowserRouter, Routes, Route } from "react-router-dom";
import MonitoringCPL from "./pages/dosen/Monitoring/MonitoringCPL";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import KurikulumPublik from "./pages/KurikulumPublik";
import DashboardDosen from "./pages/dosen/Dashboard/DashboardDosen";
import InputNilaiCPMK from "./pages/dosen/Nilai/InputNilaiCPMK";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/kurikulum" element={<KurikulumPublik />} />

        {/* DOSEN */}
        <Route path="/dosen/dashboard" element={<DashboardDosen />} />
        <Route path="/dosen/monitoring" element={<MonitoringCPL />} />
        <Route path="/dosen/nilai" element={<InputNilaiCPMK />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

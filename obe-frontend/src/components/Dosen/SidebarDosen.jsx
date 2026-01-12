import { Link } from "react-router-dom";
import "./SidebarDosen.css";

export default function SidebarDosen() {
  return (
    <aside className="sidebar-dosen">
      <h2 className="sidebar-title">Dosen Panel</h2>

      <nav>
        <Link to="/dosen/dashboard">Dashboard</Link>
        <Link to="/dosen/monitoring">Monitoring CPL–CPMK</Link>
        <Link to="/dosen/nilai">Input Nilai CPMK</Link>
        <Link to="/">Logout</Link>
      </nav>

    </aside>
  );
}

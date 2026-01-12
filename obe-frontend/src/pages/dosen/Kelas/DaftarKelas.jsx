import SidebarDosen from "../../SidebarDosen/SidebarDosen";
import { Link } from "react-router-dom";
import "./DaftarKelas.css";

export default function DaftarKelas() {
  return (
    <div className="dosen-layout">
      <SidebarDosen />

      <main className="dosen-content">
        <h1>Daftar Kelas</h1>

        <table>
          <thead>
            <tr>
              <th>Mata Kuliah</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rekayasa Perangkat Lunak</td>
              <td>
                <Link to="/dosen/nilai">Input Nilai</Link> |{" "}
                <Link to="/dosen/capaian">Monitoring</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

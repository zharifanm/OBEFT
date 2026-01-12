import SidebarDosen from "../../SidebarDosen/SidebarDosen";
import "./MonitoringCapaian.css";

export default function MonitoringCapaian() {
  return (
    <div className="dosen-layout">
      <SidebarDosen />

      <main className="dosen-content">
        <h1>Monitoring Capaian OBE</h1>

        <table>
          <thead>
            <tr>
              <th>Mahasiswa</th>
              <th>CPMK</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mahasiswa A</td>
              <td>78</td>
              <td className="status-ok">Memenuhi</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

import "./MonitoringCPL.css";
import SidebarDosen from "../../../components/dosen/SidebarDosen.jsx";


export default function MonitoringCPL() {
  return (
    <div className="dosen-layout">
      <SidebarDosen />

      <main className="dosen-content">
        <h1>Monitoring CPL – CPMK</h1>
        <p className="subtitle">
          Monitoring ketercapaian capaian pembelajaran berbasis OBE
        </p>

        {/* FILTER */}
        <div className="filter-box">
          <div>
            <label>Mata Kuliah</label>
            <select>
              <option>Rekayasa Perangkat Lunak</option>
              <option>Manajemen Proyek TI</option>
            </select>
          </div>

          <div>
            <label>Kelas</label>
            <select>
              <option>A</option>
              <option>B</option>
            </select>
          </div>
        </div>

        {/* TABLE */}
        <section className="monitoring-section">
          <h2>Relasi CPMK ke CPL</h2>

          <table>
            <thead>
              <tr>
                <th>CPMK</th>
                <th>Deskripsi CPMK</th>
                <th>CPL Terkait</th>
                <th>Capaian (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CPMK-1</td>
                <td>Mampu menganalisis kebutuhan sistem</td>
                <td>CPL-2, CPL-3</td>
                <td>
                  <span className="badge success">85%</span>
                </td>
              </tr>
              <tr>
                <td>CPMK-2</td>
                <td>Mampu merancang arsitektur perangkat lunak</td>
                <td>CPL-4</td>
                <td>
                  <span className="badge warning">72%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* SUMMARY */}
        <section className="monitoring-summary">
          <h2>Ringkasan Capaian CPL</h2>

          <div className="summary-grid">
            <div className="summary-card">
              <h3>CPL-2</h3>
              <p>87%</p>
            </div>
            <div className="summary-card">
              <h3>CPL-3</h3>
              <p>80%</p>
            </div>
            <div className="summary-card">
              <h3>CPL-4</h3>
              <p>75%</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

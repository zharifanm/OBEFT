import "./DashboardDosen.css";
import SidebarDosen from "../../../components/dosen/SidebarDosen";
import StatCard from "../../../components/dosen/StatCard";

export default function DashboardDosen() {
  return (
    <div className="dosen-layout">
      <SidebarDosen />

      <main className="dosen-content">
        <h1>Dashboard Dosen</h1>
        <p className="subtitle">
          Ringkasan aktivitas pembelajaran berbasis OBE
        </p>

        {/* STAT */}
        <div className="stat-grid">
          <StatCard
            title="Mata Kuliah Diampu"
            value="4"
            desc="Semester aktif"
          />
          <StatCard
            title="Total CPMK"
            value="18"
            desc="Terdefinisi"
          />
          <StatCard
            title="CPL Prodi"
            value="9"
            desc="Terkait"
          />
          <StatCard
            title="Capaian Rata-rata"
            value="82%"
            desc="Semester berjalan"
          />
        </div>

        {/* SECTION */}
        <section className="dosen-section">
          <h2>Mata Kuliah Aktif</h2>

          <table>
            <thead>
              <tr>
                <th>Kode</th>
                <th>Mata Kuliah</th>
                <th>Kelas</th>
                <th>Semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TI301</td>
                <td>Rekayasa Perangkat Lunak</td>
                <td>A</td>
                <td>5</td>
              </tr>
              <tr>
                <td>TI402</td>
                <td>Manajemen Proyek TI</td>
                <td>B</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

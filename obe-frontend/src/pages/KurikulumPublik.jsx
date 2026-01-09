import { useState } from "react";
import "./KurikulumPublik.css";

export default function KurikulumPublik() {
  const [prodi, setProdi] = useState("");
  const [periode, setPeriode] = useState("");

  const showData = prodi && periode;

  return (
    <div className="kurikulum-page">
      {/* HEADER */}
      <div className="kurikulum-header">
        <h1>Kurikulum OBE Publik</h1>
        <p>
          Informasi kurikulum, CPL, dan mata kuliah Fakultas Teknik
          Universitas Tidar berbasis Outcome Based Education.
        </p>
      </div>

      {/* FILTER */}
      <section className="kurikulum-section">
        <h2>Pilih Program Studi & Periode</h2>

        <div className="filter-grid">
          <div className="filter-item">
            <label>Program Studi</label>
            <select value={prodi} onChange={(e) => setProdi(e.target.value)}>
              <option value="">-- Pilih Program Studi --</option>
              <option value="sipil">Teknik Sipil</option>
              <option value="mesin">Teknik Mesin</option>
              <option value="elektro">Teknik Elektro</option>
              <option value="mekatronika">Teknik Mekatronika</option>
              <option value="ti">Teknologi Informasi</option>
              <option value="industri">Teknik Industri</option>
              <option value="trm">D4 Teknologi Rekayasa Manufaktur</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Periode Akademik</label>
            <select value={periode} onChange={(e) => setPeriode(e.target.value)}>
              <option value="">-- Pilih Periode --</option>
              <option value="20252026">2025/2026</option>
              <option value="20242025">2024/2025</option>
            </select>
          </div>
        </div>
      </section>

      {/* DATA PRODI */}
      {showData && (
        <>
          <section className="kurikulum-section light">
            <h2>Informasi Program Studi</h2>

            <div className="prodi-grid two-col">
                {/* KETUA PRODI */}
                <div className="prodi-card">
                <h3>Ketua Program Studi</h3>
                <p className="prodi-name">Dr. Wahyu Widiyanto</p>
                <p className="prodi-email">wahyu@untidar.ac.id</p>
                </div>

                {/* MASTER CPL */}
                <div className="prodi-card highlight">
                <h3>Master CPL</h3>
                <p className="cpl-total">12 CPL</p>
                <span className="cpl-year">Kurikulum 2021</span>
                </div>
            </div>
            </section>


          {/* TABEL MATA KULIAH */}
          <section className="kurikulum-section">
            <h2>Data Mata Kuliah</h2>

            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Kode MK</th>
                    <th>Nama Mata Kuliah</th>
                    <th>CPL</th>
                    <th>Jenis</th>
                    <th>SKS</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>TS101</td>
                    <td>Matematika Teknik</td>
                    <td>CPL01</td>
                    <td>Wajib</td>
                    <td>3</td>
                    <td>
                      <button className="btn-rps">RPS</button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>TS202</td>
                    <td>Mekanika Teknik</td>
                    <td>CPL02</td>
                    <td>Wajib</td>
                    <td>3</td>
                    <td>
                      <button className="btn-rps">RPS</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

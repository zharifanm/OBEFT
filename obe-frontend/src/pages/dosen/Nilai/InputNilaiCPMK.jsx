import { useState } from "react";
import "./InputNilaiCPMK.css";
import SidebarDosen from "../../../components/dosen/SidebarDosen.jsx";

export default function InputNilaiCPMK() {
  const [nilai, setNilai] = useState({
    CPMK1: "",
    CPMK2: "",
    CPMK3: "",
  });

  const handleChange = (key, value) => {
    setNilai({ ...nilai, [key]: value });
  };

  const rataRata =
    (Number(nilai.CPMK1) + Number(nilai.CPMK2) + Number(nilai.CPMK3)) / 3 || 0;

  return (
    <div className="dosen-layout">
      <SidebarDosen />

      <main className="dosen-content">
        <h1>Input Nilai CPMK</h1>
        <p className="subtitle">
          Pengisian nilai capaian pembelajaran mata kuliah
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
        <table className="nilai-table">
          <thead>
            <tr>
              <th>CPMK</th>
              <th>Deskripsi</th>
              <th>Nilai (0–100)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CPMK-1</td>
              <td>Mampu menganalisis kebutuhan sistem</td>
              <td>
                <input
                  type="number"
                  value={nilai.CPMK1}
                  onChange={(e) => handleChange("CPMK1", e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>CPMK-2</td>
              <td>Mampu merancang arsitektur perangkat lunak</td>
              <td>
                <input
                  type="number"
                  value={nilai.CPMK2}
                  onChange={(e) => handleChange("CPMK2", e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>CPMK-3</td>
              <td>Mampu mengimplementasikan solusi perangkat lunak</td>
              <td>
                <input
                  type="number"
                  value={nilai.CPMK3}
                  onChange={(e) => handleChange("CPMK3", e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>

        {/* SUMMARY */}
        <div className="nilai-summary">
          <h3>Rata-rata Capaian CPMK</h3>
          <p className={rataRata >= 75 ? "good" : "warning"}>
            {rataRata.toFixed(2)}%
          </p>
        </div>

        <button className="btn-save">Simpan Nilai</button>
      </main>
    </div>
  );
}

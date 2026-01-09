import "./Login.css";
import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("dosen");

  return (
    <div className="login-page">
      {/* Overlay */}
      <div className="login-overlay"></div>

      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-info">
          <h1>Kurikulum OBE</h1>
          <h2>Fakultas Teknik<br />Universitas Tidar</h2>
          <p>
            Sistem Kurikulum Outcome Based Education untuk mendukung
            pengelolaan pembelajaran, asesmen, dan evaluasi capaian
            pembelajaran secara terintegrasi.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="login-card">
          <h3>Silahkan Login</h3>

          <form className="login-form">
            {/* ROLE */}
            <label>
              <span>* Login Sebagai</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="dosen">Dosen</option>
                <option value="mahasiswa">Mahasiswa</option>
              </select>
            </label>

            {/* USERNAME */}
            <label>
              <span>* NIM / Kode Dosen</span>
              <input
                type="text"
                placeholder="Masukkan NIM atau Kode Dosen"
              />
            </label>

            {/* PASSWORD */}
            <label>
              <span>* Password</span>
              <input
                type="password"
                placeholder="Masukkan password"
              />
            </label>

            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

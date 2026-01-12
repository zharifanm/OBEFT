import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import bgLogin from "../../assets/images/bg-login.jpg";

export default function Login() {
  const navigate = useNavigate();

  // STATE 
  const [role, setRole] = useState("Dosen");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // SIMULASI LOGIN
    if (role === "Dosen") {
      navigate("/dosen/dashboard");
    } else {
      alert("Role belum tersedia");
    }
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="login-overlay" />

      <div className="login-wrapper">
        {/* LEFT INFO */}
        <div className="login-info">
          <span className="badge">Sistem Akademik</span>
          <h1>Kurikulum OBE</h1>
          <h2>
            Fakultas Teknik <br /> Universitas Tidar
          </h2>
          <p>
            Sistem Kurikulum Outcome Based Education untuk mendukung
            pengelolaan pembelajaran, asesmen, dan evaluasi capaian
            pembelajaran secara terintegrasi.
          </p>
        </div>

        {/* LOGIN CARD */}
        <div className="login-card">
          <h3>Silahkan Login</h3>

          <form onSubmit={handleLogin}>
            <label>Login Sebagai</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Dosen">Dosen</option>
              <option value="Mahasiswa">Mahasiswa</option>
              <option value="Admin">Admin</option>
            </select>

            <label>NIM / Kode Dosen</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Masukkan NIM atau Kode Dosen"
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />

            <button type="submit" className="btn-login">
              Login
            </button>
          </form>

          <Link to="/kurikulum" className="btn-public">
            Akses Kurikulum OBE Publik
          </Link>
        </div>
      </div>

      <Link to="/" className="btn-back">
        ← Kembali ke Home
      </Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import "./Login.css";
import bgLogin from "../assets/images/bg-login.jpg";

export default function Login() {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgLogin})` }}
    >
      <div className="login-overlay"></div>

      <div className="login-container">
        {/* LEFT CONTENT */}
        <div className="login-info">
          <span className="login-badge">Sistem Akademik</span>
          <h1>Kurikulum OBE</h1>
          <h2>Fakultas Teknik<br />Universitas Tidar</h2>
          <p>
            Sistem Kurikulum Outcome Based Education yang dirancang
            untuk mendukung pengelolaan pembelajaran, asesmen,
            serta evaluasi capaian pembelajaran secara terintegrasi
            dan berkelanjutan.
          </p>
        </div>

        {/* LOGIN CARD */}
        <div className="login-card">
          <h3>Silahkan Login</h3>

          <form>
            <div className="form-group">
              <label>Login Sebagai</label>
              <select>
                <option>Admin</option>
                <option>Dosen</option>
                <option>Mahasiswa</option>
              </select>
            </div>

            <div className="form-group">
              <label>NIM / Kode Dosen</label>
              <input placeholder="Masukkan NIM atau Kode Dosen" />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Masukkan password" />
            </div>

            <button className="btn-login">Login</button>
          </form>

          <Link to="/kurikulum" className="btn-public">
            Akses Kurikulum OBE Publik
        </Link>

        </div>
      </div>

      <Link to="/" className="btn-back-home">
        ← Kembali ke Home
      </Link>
    </div>
  );
}

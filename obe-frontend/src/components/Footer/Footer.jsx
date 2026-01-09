import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ================= BRAND ================= */}
        <div className="footer-brand">
          <h3>OBE FT UNTIDAR</h3>
          <p>
            Sistem Kurikulum Outcome Based Education<br />
            Fakultas Teknik Universitas Tidar
          </p>
        </div>

        {/* ================= NAV ================= */}
        <div className="footer-nav">
          <h4>Navigasi</h4>
          <ul>
            <li>Beranda</li>
            <li>Tentang OBE</li>
            <li>Program Studi</li>
            <li>Fitur Sistem</li>
          </ul>
        </div>

        {/* ================= INFO ================= */}
        <div className="footer-info">
          <h4>Informasi</h4>
          <p>
            Fakultas Teknik Universitas Tidar<br />
            Jl. Kapten Suparman No.39<br />
            Magelang, Jawa Tengah
          </p>
        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Fakultas Teknik Universitas Tidar.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

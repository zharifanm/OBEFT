
import { useState } from "react";import "./Navbar.css";
import logoUntidar from "../../assets/images/LogoUntidar.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* BRAND */}
        <div className="navbar__brand">
          <img src={logoUntidar} alt="Logo Universitas Tidar" />
          <span>OBE FT UNTIDAR</span>
        </div>

        {/* MENU DESKTOP */}
        <nav className="navbar__nav">
          <ul className="navbar__menu">
            <li>Tentang</li>
            <li>Program Studi</li>
            <li>Panduan OBE</li>
            <li>Fitur Sistem</li>
          </ul>
        </nav>

        {/* ACTION DESKTOP */}
        <div className="navbar__actions">
          <button className="btn btn--login">Login</button>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="navbar__mobile">
          <ul>
            <li>Tentang</li>
            <li>Program Studi</li>
            <li>Panduan OBE</li>
            <li>Fitur Sistem</li>
            <li className="mobile-login">Login</li>
          </ul>
        </div>
      )}
    </header>
  );
}
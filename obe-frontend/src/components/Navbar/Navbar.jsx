import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
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
            <li><a href="#about">Tentang</a></li>
            <li><a href="#program-studi">Program Studi</a></li>
            <li><a href="#panduan">Panduan OBE</a></li>
            <li><a href="#fitur">Fitur Sistem</a></li>
          </ul>
        </nav>

        {/* LOGIN (PAKAI ROUTER) */}
        <div className="navbar__actions">
          <Link to="/login">
            <button className="btn btn--login">Login</button>
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="navbar__mobile">
          <ul>
            <li><a href="#about" onClick={() => setOpen(false)}>Tentang</a></li>
            <li><a href="#program-studi" onClick={() => setOpen(false)}>Program Studi</a></li>
            <li><a href="#panduan" onClick={() => setOpen(false)}>Panduan OBE</a></li>
            <li><a href="#fitur" onClick={() => setOpen(false)}>Fitur Sistem</a></li>
            <li className="mobile-login">
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

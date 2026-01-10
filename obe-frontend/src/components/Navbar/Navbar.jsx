import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoUntidar from "../../assets/images/LogoUntidar.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector(".navbar");

    if (!section || !navbar) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbar.offsetHeight;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

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
            <li>
              <button onClick={() => scrollToSection("about")}>
                Tentang
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("program-studi")}>
                Program Studi
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("panduan")}>
                Panduan OBE
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("fitur")}>
                Fitur Sistem
              </button>
            </li>
          </ul>
        </nav>

        {/* LOGIN */}
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
            <li><button onClick={() => scrollToSection("about")}>Tentang</button></li>
            <li><button onClick={() => scrollToSection("program-studi")}>Program Studi</button></li>
            <li><button onClick={() => scrollToSection("panduan")}>Panduan OBE</button></li>
            <li><button onClick={() => scrollToSection("fitur")}>Fitur Sistem</button></li>
            <li className="mobile-login">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

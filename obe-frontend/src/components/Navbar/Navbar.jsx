import "./Navbar.css";
import logoUntidar from "../../assets/images/LogoUntidar.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand">
          <img src={logoUntidar} alt="Logo UNTIDAR" />
          <span>OBE FT UNTIDAR</span>
        </div>

        <ul className="navbar__menu">
          <li>Tentang</li>
          <li>Program Studi</li>
          <li>Panduan OBE</li>
          <li>Fitur Sistem</li>
        </ul>

        <div className="navbar__actions">
          <button className="btn btn--outline">Sign Up</button>
          <button className="btn btn--solid">Login</button>
        </div>
      </div>
    </header>
  );
}

import "./Hero.css";
import bgCampus from "../../assets/images/bg-campus.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${bgCampus})` }}
    >
      <div className="hero__overlay">
        <div className="hero__content">
          <h1>Sistem Kurikulum</h1>
          <h2>Outcome Based Education (OBE)</h2>
          <p>Fakultas Teknik Universitas Tidar</p>

          <div className="hero__actions">
            <button className="btn btn--hero">
              Panduan Sistem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

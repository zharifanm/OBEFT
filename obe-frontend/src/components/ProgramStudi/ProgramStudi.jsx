import "./ProgramStudi.css";

export default function ProgramStudi() {
  return (
    <section className="prodi-section">
      <div className="prodi-container">

        {/* HEADER */}
        <div className="prodi-header">
          <h2>Program Studi Fakultas Teknik</h2>
          <p>
            Sistem OBE Fakultas Teknik Universitas Tidar diterapkan pada seluruh
            program studi untuk memastikan ketercapaian capaian pembelajaran
            lulusan secara konsisten dan terukur.
          </p>
        </div>

        {/* GRID PRODI */}
        <div className="prodi-grid">

          <div className="prodi-card">
            <h3>Teknik Mesin</h3>
            <p>
              Berfokus pada penguasaan rekayasa mekanik, manufaktur, dan sistem
              energi berbasis capaian pembelajaran.
            </p>
            <span className="prodi-tag">S1</span>
          </div>

          <div className="prodi-card">
            <h3>Teknik Sipil</h3>
            <p>
              Mengembangkan kompetensi perencanaan, konstruksi, dan manajemen
              infrastruktur yang berkelanjutan.
            </p>
            <span className="prodi-tag">S1</span>
          </div>

          <div className="prodi-card">
            <h3>Teknik Elektro</h3>
            <p>
              Menitikberatkan pada sistem kelistrikan, elektronika, dan kontrol
              berbasis standar OBE.
            </p>
            <span className="prodi-tag">S1</span>
          </div>

          <div className="prodi-card">
            <h3>Teknik Mekatronika</h3>
            <p>
              Integrasi mekanika, elektronika, dan sistem kontrol untuk solusi
              rekayasa modern.
            </p>
            <span className="prodi-tag">S1</span>
          </div>

          <div className="prodi-card">
            <h3>Teknologi Informasi</h3>
            <p>
              Pengembangan sistem informasi, perangkat lunak, dan teknologi
              digital berbasis capaian pembelajaran.
            </p>
            <span className="prodi-tag">S1</span>
          </div>

          <div className="prodi-card">
            <h3>Teknik Industri</h3>
            <p>
              Optimalisasi sistem industri melalui pendekatan rekayasa,
              manajemen, dan analisis berbasis OBE.
            </p>
            <span className="prodi-tag">S1</span>
          </div>

          <div className="prodi-card">
            <h3>D4 Teknologi Rekayasa Manufaktur</h3>
            <p>
              Pendidikan vokasi yang menekankan keterampilan terapan dan kesiapan
              kerja di bidang manufaktur.
            </p>
            <span className="prodi-tag">D4</span>
          </div>

        </div>
      </div>
    </section>
  );
}

import "./FiturOBE.css";

export default function FiturOBE() {
  return (
     <section id="fitur" className="fitur-obe">
      <div className="fitur-container">

        {/* HEADER */}
        <div className="fitur-header">
          <h2>Fitur Sistem OBE</h2>
          <p>
            Sistem OBE Fakultas Teknik Universitas Tidar dilengkapi dengan
            berbagai fitur untuk mendukung pengelolaan kurikulum, pemantauan
            capaian pembelajaran, serta evaluasi berkelanjutan secara terintegrasi.
          </p>
        </div>

        {/* GRID FITUR */}
        <div className="fitur-grid">

          <div className="fitur-card">
            <h3>Manajemen CPL & CPMK</h3>
            <p>
              Pengelolaan capaian pembelajaran lulusan (CPL) dan capaian
              pembelajaran mata kuliah (CPMK) secara terstruktur dan terdokumentasi.
            </p>
          </div>

          <div className="fitur-card">
            <h3>Pemetaan CPL–CPMK–MK</h3>
            <p>
              Visualisasi keterkaitan antara CPL, CPMK, dan mata kuliah untuk
              memastikan keselarasan kurikulum.
            </p>
          </div>

          <div className="fitur-card">
            <h3>RPS & Asesmen</h3>
            <p>
              Penyusunan RPS, metode pembelajaran, serta asesmen berbasis rubrik
              yang mendukung pencapaian CPMK.
            </p>
          </div>

          <div className="fitur-card">
            <h3>Monitoring Capaian</h3>
            <p>
              Pemantauan ketercapaian CPL dan CPMK melalui grafik dan laporan
              berbasis data.
            </p>
          </div>

          <div className="fitur-card">
            <h3>Continuous Quality Improvement</h3>
            <p>
              Evaluasi dan perbaikan berkelanjutan (CQI) berdasarkan hasil asesmen
              dan analisis capaian pembelajaran.
            </p>
          </div>

          <div className="fitur-card">
            <h3>Role Based Access</h3>
            <p>
              Hak akses sistem dibedakan berdasarkan peran pengguna seperti
              admin fakultas, prodi, dosen, dan auditor.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

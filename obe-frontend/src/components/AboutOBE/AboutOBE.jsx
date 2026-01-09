import "./AboutOBE.css";

export default function AboutOBE() {
  return (
    <section className="about-obe">
      <div className="about-container">

        {/* ================= HEADER ================= */}
        <div className="about-header">
          <h2>Tentang Outcome Based Education (OBE)</h2>
          <p>
            Outcome Based Education (OBE) merupakan pendekatan pendidikan yang
            menempatkan capaian pembelajaran sebagai dasar utama dalam
            perancangan kurikulum, proses pembelajaran, dan sistem evaluasi.
            Pendekatan ini memastikan bahwa lulusan memiliki kompetensi yang
            relevan, terukur, dan sesuai dengan kebutuhan pemangku kepentingan.
          </p>
        </div>

        {/* ================= MANFAAT ================= */}
        <h3 className="section-title">Manfaat Implementasi OBE</h3>
        <div className="manfaat-grid">

          <div className="manfaat-card">
            <h4>Berorientasi Capaian</h4>
            <p>
              Proses pembelajaran difokuskan pada hasil akhir yang terukur dan
              relevan dengan profil lulusan Fakultas Teknik Universitas Tidar.
            </p>
          </div>

          <div className="manfaat-card">
            <h4>Kurikulum Terstruktur</h4>
            <p>
              Keterkaitan antara CPL, CPMK, metode pembelajaran, serta asesmen
              disusun secara sistematis dan terintegrasi.
            </p>
          </div>

          <div className="manfaat-card">
            <h4>Peningkatan Mutu</h4>
            <p>
              Evaluasi berbasis data mendukung perbaikan berkelanjutan serta
              peningkatan kualitas lulusan dan tata kelola akademik.
            </p>
          </div>

        </div>

        {/* ================= LANDASAN ================= */}
        <h3 className="section-title">Landasan & Regulasi</h3>
        <div className="landas-box">
          <ul>
            <li>Permendikbud No. 3 Tahun 2020 tentang Standar Nasional Pendidikan Tinggi</li>
            <li>Kerangka Kualifikasi Nasional Indonesia (KKNI)</li>
            <li>Standar dan kebijakan akreditasi BAN-PT serta LAM</li>
            <li>Kebutuhan dunia industri dan hasil tracer study lulusan</li>
          </ul>
        </div>

        {/* ================= TAHAPAN ================= */}
        <h3 className="section-title">
          Tahapan Implementasi OBE Fakultas Teknik
        </h3>

        <div className="tahapan-grid">

          <div className="tahapan-card">
            <span>1</span>
            <p>
              Penetapan profil lulusan dan capaian pembelajaran lulusan (CPL)
              sesuai visi dan misi Fakultas Teknik.
            </p>
          </div>

          <div className="tahapan-card">
            <span>2</span>
            <p>
              Penurunan CPL ke dalam capaian pembelajaran mata kuliah (CPMK)
              secara terstruktur dan terukur.
            </p>
          </div>

          <div className="tahapan-card">
            <span>3</span>
            <p>
              Penyusunan RPS serta metode pembelajaran yang mendukung pencapaian
              CPMK pada setiap mata kuliah.
            </p>
          </div>

          <div className="tahapan-card">
            <span>4</span>
            <p>
              Pelaksanaan asesmen berbasis rubrik serta perbaikan berkelanjutan
              melalui Continuous Quality Improvement (CQI).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

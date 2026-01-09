import "./AboutOBE.css";

export default function AboutOBE() {
  return (
    <section className="about-obe">
      <div className="about-obe__container">

        {/* ===== JUDUL UTAMA ===== */}
        <div className="about-obe__header">
          <h2>Tentang Outcome Based Education (OBE)</h2>
          <p>
            Outcome Based Education (OBE) merupakan pendekatan pendidikan yang
            berfokus pada capaian pembelajaran lulusan sebagai dasar perencanaan,
            pelaksanaan, penilaian, dan evaluasi kurikulum.
          </p>
        </div>

        {/* ===== MANFAAT ===== */}
        <div className="about-obe__section">
          <h3>Manfaat Implementasi OBE</h3>
          <p>
            Implementasi OBE mendorong pendekatan pembelajaran yang terstruktur,
            relevan dengan kebutuhan dunia kerja, serta berorientasi pada
            peningkatan mutu lulusan secara berkelanjutan.
          </p>

          <ul className="about-obe__list">
            <li>Fokus pada hasil akhir pembelajaran yang terukur</li>
            <li>Restrukturisasi kurikulum dan asesmen untuk mendukung CPL</li>
            <li>Peningkatan kualitas lulusan melalui pendekatan sistematis</li>
          </ul>
        </div>

        {/* ===== LANDASAN ===== */}
        <div className="about-obe__section about-obe__section--alt">
          <h3>Landasan & Regulasi</h3>
          <p>
            Implementasi OBE mengacu pada regulasi dan standar nasional
            pendidikan tinggi sebagai berikut:
          </p>

          <ul className="about-obe__list">
            <li>Permendikbud No. 3 Tahun 2020 tentang SN-DIKTI</li>
            <li>Kerangka Kualifikasi Nasional Indonesia (KKNI)</li>
            <li>Standar akreditasi BAN-PT dan LAM</li>
            <li>Kebutuhan industri dan hasil tracer study</li>
          </ul>
        </div>

        {/* ===== TAHAPAN ===== */}
        <div className="about-obe__section">
          <h3>Tahapan Implementasi OBE</h3>

          <div className="about-obe__steps">
            <div className="obe-step">
              <span className="obe-step__number">1</span>
              <h4>Menyusun Profil & CPL</h4>
              <p>
                Mengidentifikasi profil lulusan dan menyusun CPL sesuai
                kebutuhan industri dan SN-DIKTI.
              </p>
            </div>

            <div className="obe-step">
              <span className="obe-step__number">2</span>
              <h4>Menurunkan CPL → CPMK</h4>
              <p>
                Memetakan CPL ke mata kuliah melalui CPMK yang selaras dan
                terukur.
              </p>
            </div>

            <div className="obe-step">
              <span className="obe-step__number">3</span>
              <h4>Metode Pembelajaran & RPS</h4>
              <p>
                Mengembangkan RPS dan aktivitas pembelajaran berbasis
                CPL/CPMK.
              </p>
            </div>

            <div className="obe-step">
              <span className="obe-step__number">4</span>
              <h4>Asesmen & CQI</h4>
              <p>
                Asesmen berbasis rubrik dan perbaikan berkelanjutan
                (Continuous Quality Improvement).
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

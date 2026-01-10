import "./AboutOBE.css";

export default function AboutOBE() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <h2>Tentang Outcome Based Education (OBE)</h2>
        <p>
          Outcome Based Education (OBE) merupakan pendekatan pendidikan
          yang menitikberatkan pada capaian pembelajaran lulusan sebagai
          dasar perancangan kurikulum, proses pembelajaran, dan evaluasi.
        </p>

        <div className="about__grid">
          <div className="about__card">
            <h3>Fokus Capaian</h3>
            <p>
              Setiap mata kuliah dirancang untuk mendukung pencapaian CPL
              yang terukur dan relevan dengan kebutuhan industri.
            </p>
          </div>

          <div className="about__card">
            <h3>Kurikulum Terintegrasi</h3>
            <p>
              CPL, CPMK, metode pembelajaran, dan asesmen disusun secara
              sistematis dan berkesinambungan.
            </p>
          </div>

          <div className="about__card">
            <h3>Evaluasi Berkelanjutan</h3>
            <p>
              Implementasi OBE mendorong Continuous Quality Improvement
              (CQI) dalam proses pendidikan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

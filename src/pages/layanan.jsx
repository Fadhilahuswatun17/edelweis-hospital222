import { useEffect, useState } from "react";

export default function Layanan() {
  const [news, setNews] = useState([]);

  // 🔷 AMBIL DATA DARI MEDIASTACK
  useEffect(() => {
    fetch(
      "https://api.mediastack.com/v1/news?access_key=76411e46ca600821f896f204d45868f&countries=id&categories=health&limit=6"
    )
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={styles.container}>
      
      {/* 🔷 CARD UTAMA */}
      <div style={styles.card}>
        
        <h2 style={styles.title}>Layanan Kami</h2>

        {/* 🔷 PUSAT UNGGULAN */}
        <h3 style={styles.subtitle}>Pusat Unggulan</h3>
        <ul>
          <li>Brain Center & Neurosurgery</li>
          <li>Mother & Children Center</li>
          <li>Pain Center</li>
          <li>Wellness & Aesthetic</li>
          <li>Golden Senior Care</li>
          <li>Stem Cell Therapy</li>
        </ul>

        {/* 🔷 LAYANAN UMUM */}
        <h3 style={styles.subtitle}>Layanan Umum</h3>
        <ul>
          <li>IGD 24 Jam</li>
          <li>Poli Rawat Jalan</li>
          <li>Radiologi & Laboratorium</li>
          <li>Rehabilitasi Medis</li>
        </ul>

        {/* 🔷 PAKET */}
        <h3 style={styles.subtitle}>Paket Layanan</h3>
        <ul>
          <li>Medical Check Up</li>
          <li>Paket Persalinan</li>
          <li>Paket Khitan Anak</li>
        </ul>

        {/* 🔷 BERITA KESEHATAN */}
        <div style={{ marginTop: "30px" }}>
          <h3 style={styles.subtitle}>Berita Kesehatan</h3>

          <div style={styles.grid}>
            {news.map((item, index) => (
              <div key={index} style={styles.newsCard}>
                
                {/* GAMBAR */}
                {item.image ? (
                  <img src={item.image} alt="" style={styles.image} />
                ) : (
                  <div style={styles.noImage}>No Image</div>
                )}

                {/* ISI */}
                <div style={styles.newsContent}>
                  <h4 style={styles.newsTitle}>{item.title}</h4>
                  <p style={styles.newsDesc}>
                    {item.description?.slice(0, 80)}...
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 🔷 FOOTER */}
      <div style={styles.footer}>
        © 2026 Edelweiss Hospital
      </div>

    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#e5e7eb",
    minHeight: "100vh",
    padding: "30px",
  },
  card: {
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#cbd5e1",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "blue",
  },
  subtitle: {
    color: "#1e3a8a",
    marginTop: "20px",
  },

  /* 🔷 BERITA */
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginTop: "15px",
  },
  newsCard: {
    width: "240px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
  },
  noImage: {
    height: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ddd",
  },
  newsContent: {
    padding: "10px",
  },
  newsTitle: {
    fontSize: "14px",
    color: "#1e3a8a",
  },
  newsDesc: {
    fontSize: "12px",
    color: "#555",
  },

  footer: {
    marginTop: "20px",
    textAlign: "center",
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px",
  },
};
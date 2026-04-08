import gedung from "../assets/gedung.webp";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f9fbfd",
        borderRadius: "12px",
      }}
    >
      {/* FOTO + OVERLAY */}
      <div style={{ position: "relative" }}>
        <img
          src={gedung}
          alt="Edelweis Hospital"
          style={{
            width: "100%",
            height: "260px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 70, 140, 0.4)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Edelweis Hospital
        </div>
      </div>

      {/* DESKRIPSI */}
      <p
        style={{
          textAlign: "center",
          color: "#555",
          margin: "20px 0",
          lineHeight: "1.6",
        }}
      >
        Selamat datang di Edelweis Hospital. Kami berkomitmen memberikan
        pelayanan kesehatan terbaik kepada masyarakat dengan tenaga medis
        profesional dan fasilitas modern.
      </p>

      {/* DIVIDER */}
      <div
        style={{
          width: "60px",
          height: "4px",
          background: "#0077cc",
          margin: "20px auto",
          borderRadius: "10px",
        }}
      />

      {/* INFO */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        {[
          { icon: "🏥", title: "24 Jam", desc: "IGD siap setiap saat" },
          { icon: "👨‍⚕️", title: "Profesional", desc: "Tenaga medis ahli" },
          { icon: "💊", title: "Modern", desc: "Fasilitas lengkap" },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              background: "#f0f7ff",
              padding: "18px",
              borderRadius: "10px",
              textAlign: "center",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 6px 15px rgba(0,0,0,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div style={{ fontSize: "22px" }}>{item.icon}</div>
            <h3 style={{ color: "#0077cc", margin: "8px 0 4px" }}>
              {item.title}
            </h3>
            <p style={{ color: "#555", fontSize: "14px" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* VISI MISI */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        {/* MISI */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={{ color: "#0077cc" }}>Misi</h3>
          <ul style={{ paddingLeft: "20px", color: "#444", lineHeight: "1.6" }}>
            <li>
              Memberikan pengalaman terbaik dalam pelayanan dan keselamatan pasienn, dengah penuh kasih sayang serta terpercaya sesuai dengan kebutuhan setiap pasien
            </li>
            <li>
              Mempersiapkan insan perumahsakitan yang unggul, profesional dan berorientasi pada pelayanan terbaik kepada pasien
            </li>
            <li>
              Memberikan layanan kesehatan terbaik untuk masyarakat berbasis riset, data, dan fakta
            </li>
          </ul>
        </div>

        {/* VISI */}
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            transition: "0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-5px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          <h3 style={{ color: "#0077cc" }}>Visi</h3>
          <p style={{ color: "#444", lineHeight: "1.6" }}>
            Menjadi pilihan utama sebagai penyedia layanan kesehatan terintegrasi,
            yang berfokus pada pelayanan berkualitas.
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "14px",
          color: "#888",
        }}
      >
        Edelweis Hospital © 2026
      </p>
    </div>
  );
}
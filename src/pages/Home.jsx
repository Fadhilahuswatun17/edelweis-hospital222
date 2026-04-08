import gedung from "../assets/gedung.webp";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        background: "#f9fbfd",
        borderRadius: "12px",
      }}
    >
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <div
          style={{
            width: "100%",
            height: "500px",
            backgroundImage: `url(${gedung})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "12px",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            height: "88%",
            width: "45%",
            background: "rgba(0, 70, 140, 0.6)",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
            display: "flex",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <div style={{ color: "#fff" }}>
            <h2 style={{ marginBottom: "10px", fontSize: "28px" }}>
              Edelweis Hospital
            </h2>

            <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
              Edelweis Hospital hadir sebagai rumah sakit modern yang
              berkomitmen memberikan pelayanan kesehatan terbaik kepada
              masyarakat. Dengan didukung oleh tenaga medis profesional,
              fasilitas lengkap, serta teknologi terkini.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "60px",
          height: "4px",
          background: "#0077cc",
          margin: "20px auto",
          borderRadius: "10px",
        }}
      />

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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
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
              Memberikan pengalaman terbaik dalam pelayanan dan keselamatan
              pasien, dengan penuh kasih sayang serta terpercaya sesuai dengan
              kebutuhan setiap pasien
            </li>
            <li>
              Mempersiapkan insan perumahsakitan yang unggul, profesional dan
              berorientasi pada pelayanan terbaik kepada pasien
            </li>
            <li>
              Memberikan layanan kesehatan terbaik untuk masyarakat berbasis
              riset, data, dan fakta
            </li>
          </ul>
        </div>

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
            Menjadi pilihan utama sebagai penyedia layanan kesehatan
            terintegrasi, yang berfokus pada pelayanan berkualitas.
          </p>
        </div>
      </div>
    </div>
  );
}
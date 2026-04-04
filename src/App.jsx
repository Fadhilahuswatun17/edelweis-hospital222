import { useState } from "react";

function App() {
  const [menu, setMenu] = useState("home");

  return (
    <div style={{ fontFamily: "Arial", background: "#f4f6f9", minHeight: "100vh" }}>

      <header style={{ background: "#2563eb", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Edelweis Hospital</h1>
        <p>Pelayanan Kesehatan Terbaik</p>
      </header>

      <nav style={{ display: "flex", justifyContent: "center", background: "#1d4ed8" }}>
        <button onClick={() => setMenu("home")} style={btn}>Home</button>
        <button onClick={() => setMenu("layanan")} style={btn}>Layanan</button>
        <button onClick={() => setMenu("kontak")} style={btn}>Kontak</button>
      </nav>

      <div style={{ padding: "30px" }}>

        {menu === "home" && (
          <div style={card}>
            <h2>Selamat Datang</h2>
            <p>Edelweis Hospital adalah rumah sakit modern dengan fasilitas lengkap.</p>
          </div>
        )}

        {menu === "layanan" && (
          <div style={card}>
            <h2>Layanan</h2>
            <ul>
              <li>Rawat Jalan</li>
              <li>Rawat Inap</li>
              <li>UGD 24 Jam</li>
              <li>Laboratorium</li>
            </ul>
          </div>
        )}

        {menu === "kontak" && (
          <div style={card}>
            <h2>Kontak</h2>
            <p>Alamat: Jl. Kesehatan No.123</p>
            <p>Telepon: 08123456789</p>
          </div>
        )}

      </div>

      <footer style={{ background: "#2563eb", color: "white", textAlign: "center", padding: "15px" }}>
        © 2026 Edelweis Hospital
      </footer>

    </div>
  );
}

const btn = {
  padding: "12px 20px",
  border: "none",
  background: "transparent",
  color: "white",
  cursor: "pointer"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
};

export default App;
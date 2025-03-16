import { useState, useEffect } from "react";
// import qr_img from "./assets/qr_img.png";
import axios from "axios"; // Import axios untuk komunikasi dengan backend
// import Sidebar from "./components/Sidebar"; // Import Sidebar
import QRForm from "./components/QRForm"; // Import Form Input
import QRDisplay from "./components/QRDisplay"; // Import Komponen QR Code
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
function App() {
  const [qrCode, setQrCode] = useState(""); // State untuk menyimpan gambar QR Code
  useEffect(() => {
    document.title = "QR Code Generator - Mastayxz";
  }, []);

  const generateQR = async (url: string) => {
    try {
      // Kirim URL ke backend untuk generate QR Code
      const response = await axios.post("http://localhost:5000/generate", {
        url,
      });
      setQrCode(response.data.qrCode); // Simpan QR Code dari backend
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };
  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen 
          bg-[url('./assets/bg-purple.png')] bg-cover bg-center bg-no-repeat px-4"
    >
      {/* Nama & Icon di Luar Kotak */}
      <div className="flex items-center space-x-3 mb-4">
        <p className="text-white font-bold text-2xl">Mastayxz</p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/genta-arimbawa"
            target="_blank"
            className="text-white hover:text-blue-400 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/Mastayxz"
            target="_blank"
            className="text-white hover:text-gray-400 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/bagusgenta._/"
            target="_blank"
            className="text-white hover:text-pink-400 transition"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Kotak QR Generator */}
      <div
        className="w-full max-w-4xl sm:w-full h-full p-4 rounded-4xl border border-white/50
      bg-white/10 backdrop-blur-lg md:grid md:grid-cols-2 md:gap-6 
      flex flex-col items-center justify-center md:shadow-none"
      >
        {/* Input URL + Ilustrasi */}
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-2xl font-bold mb-4 text-white text-center">
            Buat QR Code Anda dengan Mudah!
          </h2>
          <QRForm onGenerate={generateQR} />
        </div>

        {/* Hasil QR Code */}
        <div className="flex flex-col items-center justify-center w-full h-full">
          {qrCode ? (
            <>
              <QRDisplay qrCode={qrCode} />
              <p className="text-gray-600 mt-4">
                Scan QR Code ini atau download!
              </p>
            </>
          ) : (
            <div className="flex flex-col justify-center my-4">
              <p className="text-gray-500 italic border p-2 bg-white/10 rounded-xl shadow-lg w-40 h-40 md:w-64 md:h-64 text-center justify-center">
                QR Code akan muncul di sini...
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-white text-sm">
        <p>
          © 2024 Mastayxz. Dibuat dengan ❤️ menggunakan React & TailwindCSS.
        </p>
      </footer>
    </div>
  );
}

export default App;

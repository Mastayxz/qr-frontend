interface QRDisplayProps {
  qrCode: string;
}

const QRDisplay = ({ qrCode }: QRDisplayProps) => {
  if (!qrCode) return null;

  const downloadQR = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qr_code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-semibold text-white mb-4">Your QR Code:</h3>

      {/* Gambar lebih besar di desktop */}
      <img
        src={qrCode}
        alt="Generated QR Code"
        className="border p-2 bg-white/10 rounded-xl shadow-lg w-40 h-40 md:w-64 md:h-64"
      />

      <button
        onClick={downloadQR}
        className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-white/10 transition"
      >
        Download QR
      </button>
    </div>
  );
};

export default QRDisplay;

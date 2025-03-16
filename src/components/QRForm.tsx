import { useState } from "react";

interface QRFormProps {
  onGenerate: (url: string) => void;
}

const QRForm = ({ onGenerate }: QRFormProps) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url) onGenerate(url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Masukkan URL"
        className="text-white w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full mt-3 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-white/10 transition"
      >
        Generate QR Code
      </button>
    </form>
  );
};

export default QRForm;

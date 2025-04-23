import React, { useState } from "react";

export default function TokenomicsForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    setResult(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/analyze-tokenomics", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      setResult(data.result || "Yanıt alınamadı.");
    } catch (err) {
      setResult("Bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleAnalyze} disabled={loading || !file}>
        {loading ? "Yükleniyor..." : "Analiz Et"}
      </button>

      {result && <div>{result}</div>}
    </div>
  );
}

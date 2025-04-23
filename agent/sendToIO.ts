// sendToIO.ts
const API_KEY = process.env.NEXT_PUBLIC_IO_API_KEY;

export async function sendToIO(text: string) {
  try {
    const res = await fetch("https://api.intelligence.io.solutions/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-3.3-70B-Instruct",
        messages: [
          {
            role: "user",
            content: `Sen bir Tokenomics Değerlendirme Asistanısın. Lütfen aşağıdaki tokenomics verisini analiz et.\n\nMetin:\n\n${text}`,
          },
        ],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    const data = await res.json();
    return data.choices?.[0]?.message?.content || "Yanıt alınamadı.";
  } catch (error) {
    console.error("IO Intelligence API Hatası:", error);
    throw new Error("API ile bağlantı sağlanamadı.");
  }
}

import { NextApiRequest, NextApiResponse } from "next";
import { sendToIO } from "../../lib/sendToIO";  // sendToIO fonksiyonunu import ettik

export const config = {
  api: {
    bodyParser: true, // JSON verisini almak için bodyParser'ı açıyoruz
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ result: "Yalnızca POST isteği kabul edilir." });
  }

  try {
    const { text } = req.body; // Text verisini alıyoruz

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ result: "Text boş olamaz." });
    }

    // IO Intelligence API'ye gönderme
    const result = await sendToIO(text); 

    return res.status(200).json({ result });
  } catch (error) {
    console.error("HATA:", error);
    return res.status(500).json({ result: "İşlem sırasında hata oluştu." });
  }
}

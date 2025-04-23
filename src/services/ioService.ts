const API_KEY = import.meta.env.VITE_IO_API_KEY;

export async function sendToIO(text: string): Promise<string> {
  if (!API_KEY) {
    console.error(
      "API Key for IO Intelligence is not configured. Please set VITE_IO_API_KEY in your .env file."
    );
    throw new Error("API Key not configured.");
  }

  try {
    const res = await fetch(
      "https://api.intelligence.io.solutions/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.3-70B-Instruct",
          messages: [
            {
              role: "user",
              content: `You are a Tokenomics Evaluation Assistant. Please analyze the following tokenomics data and structure your response using the Markdown headings below:

### Summary
[Write a general summary here]

### Strengths
- [Strength 1]
- [Strength 2]
- ...

### Concerns
- [Concern 1]
- [Concern 2]
- ...

### Recommendations
- [Recommendation 1]
- [Recommendation 2]
- ...

Text:
${text}`,
            },
          ],
          temperature: 0.7, 
          max_tokens: 1024,
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({})); 
      console.error(
        "IO Intelligence API Error Response:",
        res.status,
        errorData
      );
      throw new Error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      console.warn(
        "No content received from IO Intelligence API response:",
        data
      );
      return "No response received or response format differed from expectations.";
    }

    return content;
  } catch (error) {
    console.error("IO Intelligence API Error:", error);
    throw new Error(
      `Unable to connect to the API: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

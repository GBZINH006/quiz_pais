// services/opneAI.js

export async function gerarPergunta() {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_KEY}` // ou process.env...
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: "Crie uma pergunta de múltipla escolha sobre React com 3 opções."
          }
        ]
      })
    });

    const data = await response.json();

    return data.choices[0].message.content;

  } catch (error) {
    console.error("Erro ao gerar pergunta:", error);
    return null;
  }
}

<<<<<<< Updated upstream
import React from "react";

export default function WinScreen({ score, total, onRestart }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🎉 Parabéns! 🎉</h1>

      <p style={styles.text}>
        Você concluiu o quiz com sucesso!
      </p>

      <p style={styles.score}>
        Pontuação: <strong>{score}</strong> / {total}
      </p>

      <button style={styles.button} onClick={onRestart}>
        Jogar novamente
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "#fff",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "1.3rem",
    marginBottom: "20px",
  },
  score: {
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
  button: {
    padding: "12px 24px",
    fontSize: "1.1rem",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#ffd700",
    color: "#000",
    fontWeight: "bold",
  },
};
=======
export default function WinPage(){
    return <h1>Win</h1>
}
>>>>>>> Stashed changes

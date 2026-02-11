import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function WinScreen({ score, total }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <div style={styles.background}>
      <div style={styles.card}>
        <h1 style={styles.title}>🎉 Parabéns! 🎉</h1>

        <p style={styles.text}>
          Você concluiu o quiz com sucesso!
        </p>

        <p style={styles.score}>
          Pontuação: <span style={styles.highlight}>{score}</span> / {total}
        </p>

        <button
          style={{
            ...styles.button,
            ...(hover ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => navigate("/")}
        >
          Voltar para o início
        </button>
      </div>
    </div>
  );
}

const styles = {
  background: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(circle at top, #2a5298, #1e3c72 60%, #0f2027)",
    padding: "20px",
  },
  card: {
    background: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(12px)",
    padding: "50px 40px",
    borderRadius: "20px",
    textAlign: "center",
    color: "#fff",
    boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
    maxWidth: "500px",
    width: "100%",
    border: "1px solid rgba(255,255,255,0.15)",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "15px",
    letterSpacing: "1px",
  },
  text: {
    fontSize: "1.2rem",
    marginBottom: "25px",
    opacity: 0.9,
  },
  score: {
    fontSize: "1.6rem",
    marginBottom: "35px",
  },
  highlight: {
    color: "#ffd700",
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  button: {
    padding: "14px 28px",
    fontSize: "1.1rem",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(45deg, #ffd700, #ffb300)",
    color: "#000",
    fontWeight: "bold",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 25px rgba(255, 215, 0, 0.4)",
  },
  buttonHover: {
    transform: "translateY(-3px) scale(1.05)",
    boxShadow: "0 15px 35px rgba(255, 215, 0, 0.6)",
  },
};
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import useBackgroundMusic from "../hooks/useBackgroundMusic";
import './index.css'
import correctSound from "../assets/sounds/Correct.mp3";
import errorSound from "../assets/sounds/Erro.mp3";

export default function QuizPage() {
  useBackgroundMusic();
  const navigate = useNavigate();

  const questions = [
    { q: "Capital do Brasil?", o: ["Rio", "Brasília", "SP"], a: "Brasília" },
    { q: "2 + 2 = ?", o: ["3", "4", "5"], a: "4" },
    { q: "React é?", o: ["Framework", "Biblioteca", "Linguagem"], a: "Biblioteca" },
    { q: "HTML é?", o: ["Marcação", "Banco", "Lógica"], a: "Marcação" },
    { q: "CSS serve pra?", o: ["Estilo", "Código", "Banco"], a: "Estilo" },
    { q: "JS roda onde?", o: ["Browser", "Photoshop", "Word"], a: "Browser" },
    { q: "Quem criou React?", o: ["Google", "Facebook", "Microsoft"], a: "Facebook" },
    { q: "useState é?", o: ["Hook", "Classe", "API"], a: "Hook" },
    { q: "Vite é?", o: ["Bundler", "Banco", "Framework"], a: "Bundler" },
    { q: "JS é?", o: ["Interpretado", "Compilado", "Assembly"], a: "Interpretado" },
  ];

  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [lock, setLock] = useState(false);
  const [status, setStatus] = useState(null);

  const correct = new Audio(correctSound);
  const error = new Audio(errorSound);

  function answer(opt) {
    if (lock) return;
    setLock(true);

    const hit = opt === questions[i].a;
    setStatus(hit ? "ok" : "err");

    hit ? correct.play() : error.play();
    if (hit) setScore(s => s + 1);

    setTimeout(() => {
      setStatus(null);
      setLock(false);
      if (i + 1 < questions.length) setI(i + 1);
      else navigate("/win", { state: { score: hit ? score + 1 : score } });
    }, 700);
  }

  return (
    <div style={styles.wrapper}>
      <Card
        title={`Pergunta ${i + 1} / ${questions.length}`}
        subTitle={`Pontuação: ${score}`}
        style={{
          ...styles.card,
          boxShadow:
            status === "ok"
              ? "0 0 40px #00ffae"
              : status === "err"
              ? "0 0 40px #ff4d6d"
              : "0 25px 60px rgba(0,0,0,.5)"
        }}
      >
        <ProgressBar
          value={((i + 1) / questions.length) * 100}
          style={styles.progress}
        />

        <h2 style={styles.question}>{questions[i].q}</h2>

        <div style={styles.options}>
          {questions[i].o.map(opt => (
            <Button
              key={opt}
              label={opt}
              disabled={lock}
              onClick={() => answer(opt)}
              className="p-button-rounded p-button-lg"
              style={styles.button}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#1e1e2f,#3b3b98,#6a11cb)",
    backgroundSize: "400% 400%",
    animation: "gradient 10s ease infinite",
  },

  card: {
    width: 450,
    borderRadius: 20,
    padding: 10,
    textAlign: "center",
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.08)",
    color: "white",
    animation: "fadeIn .6s ease",
    transition: "all .3s ease"
  },

  progress: {
    height: 12,
    marginBottom: 25,
    borderRadius: 10
  },

  question: {
    marginBottom: 25,
    fontSize: "1.5rem",
    fontWeight: 600
  },

  options: {
    display: "flex",
    flexDirection: "column",
    gap: 15
  },

  button: {
    fontSize: "1rem",
    transition: "transform .2s",
  }
};

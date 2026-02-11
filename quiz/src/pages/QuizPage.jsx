import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { InputSwitch } from "primereact/inputswitch";
import confetti from "canvas-confetti";
import useBackgroundMusic from "../hooks/useBackgroundMusic";
import './index.css'
import correctSound from "../assets/sounds/Correct.mp3";
import errorSound from "../assets/sounds/Erro.mp3";
import music from "../assets/sounds/musica.mp3";
import { gerarPergunta } from "../services/opneAI";



export default function QuizPage() {
  const navigate = useNavigate();

  const questions = [
    { q: "React é?", o: ["Framework", "Biblioteca", "Linguagem"], a: "Biblioteca" },
    { q: "HTML é?", o: ["Marcação", "Banco", "API"], a: "Marcação" },
    { q: "CSS serve pra?", o: ["Estilo", "Banco", "Servidor"], a: "Estilo" },
    { q: "useState é?", o: ["Hook", "Classe", "API"], a: "Hook" },
    { q: "JS roda onde?", o: ["Browser", "Excel", "Word"], a: "Browser" }
  ];

  const [i, setI] = useState(0);
  const [score, setScore] = useState(0);
  const [dark, setDark] = useState(true);
  const [lock, setLock] = useState(false);
  const [time, setTime] = useState(15);
  const [muted, setMuted] = useState(false);

  const bgMusic = new Audio(music);
  bgMusic.loop = true;
  bgMusic.volume = 0.4;

  useEffect(() => {
  async function carregarPergunta() {
    const pergunta = await gerarPergunta();
    console.log(pergunta);
  }

  carregarPergunta();
}, []);

  useEffect(() => {
    if (!muted) bgMusic.play();
    else bgMusic.pause();
  }, [muted]);

  useEffect(() => {
    if (time === 0) next();
    const timer = setTimeout(() => setTime(t => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  function next() {
    if (i + 1 < questions.length) {
      setI(i + 1);
      setTime(15);
    } else {
      navigate("/win", { state: { score } });
    }
  }

  function answer(opt) {
    if (lock) return;
    setLock(true);

    const correct = new Audio(correctSound);
    const error = new Audio(errorSound);

    const hit = opt === questions[i].a;

    if (hit) {
      setScore(s => s + 1);
      correct.play();
      confetti({ particleCount: 120, spread: 70 });
    } else {
      error.play();
    }

    setTimeout(() => {
      setLock(false);
      next();
    }, 1000);
  }

  return (
    <div className={dark ? "quiz-wrapper dark" : "quiz-wrapper"}>
      <Card className="quiz-card">

        <div className="quiz-top">
          <span>Pergunta {i + 1}/{questions.length}</span>

          <div className="controls">
            <i
              className={`pi ${muted ? "pi-volume-off" : "pi-volume-up"}`}
              onClick={() => setMuted(!muted)}
            />
            <InputSwitch checked={dark} onChange={(e) => setDark(e.value)} />
          </div>
        </div>

        <ProgressBar value={(time / 15) * 100} className="timer-bar" />

        <h2 className="question">{questions[i].q}</h2>

        <div className="options">
          {questions[i].o.map(opt => (
            <Button
              key={opt}
              label={opt}
              disabled={lock}
              onClick={() => answer(opt)}
              className="p-button-rounded option-btn"
            />
          ))}
        </div>

        <div className="score">Pontuação: {score}</div>

      </Card>
    </div>
  );
}

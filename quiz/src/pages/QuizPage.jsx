import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { InputSwitch } from "primereact/inputswitch";
import confetti from "canvas-confetti";
import useBackgroundMusic from "../hooks/useBackgroundMusic";
import correctSound from "../assets/sounds/Correct.mp3";
import errorSound from "../assets/sounds/Erro.mp3";
import music from "../assets/sounds/musica.mp3";
import { gerarPergunta } from "../services/openAI";



export default function QuizPage() {

  const perguntas = [
    {
      pergunta: "React é?",
      opcoes: ["Framework", "Biblioteca", "Linguagem"],
      resposta: "Biblioteca"
    },
    {
      pergunta: "Qual hook gerencia estado?",
      opcoes: ["useFetch", "useState", "usePage"],
      resposta: "useState"
    },
    {
      pergunta: "JSX é?",
      opcoes: ["HTML dentro do JS", "Banco de dados", "Servidor"],
      resposta: "HTML dentro do JS"
    }
  ]

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
    if (timer === 0) {
      proximaPergunta()
      return
    }

    const intervalo = setInterval(() => {
      setTimer((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(intervalo)
  }, [timer])

  function verificarResposta(opcao) {
    if (opcao === perguntaAtual.resposta) {
      setPontuacao(pontuacao + 1)
      criarParticulas()
    }

    setTimeout(() => {
      proximaPergunta()
    }, 800)
  }

  function proximaPergunta() {
    if (indice < perguntas.length - 1) {
      setIndice(indice + 1)
      setTimer(15)
    } else {
      alert("Quiz Finalizado 🎉 Pontuação: " + pontuacao)
    }
  }

  function criarParticulas() {
    const container = document.querySelector(".particles")
    for (let i = 0; i < 30; i++) {
      const span = document.createElement("span")
      span.className = "particle"
      span.style.left = Math.random() * 100 + "%"
      span.style.animationDelay = Math.random() * 1 + "s"
      container.appendChild(span)
      setTimeout(() => span.remove(), 1500)
    }
  }

  return (
    <div className="quiz-container">

      <div className="particles"></div>

      <div className="quiz-card">

        <div className="top-info">
          <span>Pergunta {indice + 1}/{perguntas.length}</span>
          <span>⏳ {timer}s</span>
        </div>

        <ProgressBar 
          value={(indice / perguntas.length) * 100}
          showValue={false}
          className="custom-progress"
        />

        <h2>{perguntaAtual.pergunta}</h2>

        <div className="opcoes">
          {perguntaAtual.opcoes.map((opcao, i) => (
            <Button
              key={i}
              label={opcao}
              className="quiz-button"
              onClick={() => verificarResposta(opcao)}
            />
          ))}
        </div>

        <div className="score">
          Pontuação: {pontuacao}
        </div>

      </div>
    </div>
  )
}

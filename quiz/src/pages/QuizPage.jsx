import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";
import ScoreModal from "../components/ScoreModal";
import useBackgroundMusic from "../hooks/useBackgroundMusic";

import correctSound from "../assets/sounds/Correct.mp3";
import errorSound from "../assets/sounds/Erro.mp3";

export default function QuizPage() {
  useBackgroundMusic();
  const navigate = useNavigate();

  const questions = [
    {
      question: "Capital do Brasil?",
      options: ["Rio de Janeiro", "Brasília", "São Paulo"],
      answer: "Brasília",
    },
    {
      question: "Quanto é 3 x 4?",
      options: ["7", "10", "12"],
      answer: "12",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [animate, setAnimate] = useState(false);

  const correctAudio = new Audio(correctSound);
  const errorAudio = new Audio(errorSound);

  function handleAnswer(option) {
    if (option === questions[current].answer) {
      correctAudio.play();
      setScore((s) => s + 1);
    } else {
      errorAudio.play();
    }

    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
      } else {
        setShowScore(true);
      }
    }, 300);
  }

  return (
    <div className="quiz-page">
      <ProgressBar
        progress={((current + 1) / questions.length) * 100}
      />

      <div className={animate ? "fade-out" : "fade-in"}>
        <QuestionCard
          question={questions[current].question}
          options={questions[current].options}
          onAnswer={handleAnswer}
        />
      </div>

      {showScore && (
        <ScoreModal
          score={score}
          total={questions.length}
          onFinish={() => navigate("/win")}
        />
      )}
    </div>
  );
}

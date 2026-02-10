export default function QuestionCard({ question, options, onAnswer }) {
  return (
    <div className="question-card">
      <h2>{question}</h2>
      {options.map((opt) => (
        <button key={opt} onClick={() => onAnswer(opt)}>
          {opt}
        </button>
      ))}
    </div>
  );
}

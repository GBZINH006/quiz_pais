export default function ScoreModal({ score, total, onFinish }) {
  return (
    <div className="modal">
      <h2>Resultado</h2>
      <p>
        Você acertou {score} de {total}
      </p>
      <button onClick={onFinish}>Finalizar</button>
    </div>
  );
}

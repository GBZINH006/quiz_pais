export default function ProgressBar({ progress }) {
  return (
    <div style={{ background: "#ddd", height: 10, width: "100%" }}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "#4caf50",
          transition: "width 0.3s",
        }}
      />
    </div>
  );
}

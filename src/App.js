import ProgressBar from "./ProgressBar";

export default function App() {
  return (
    <>
      <ProgressBar />

      {/* Твой контент */}
      <h1>Главная страница</h1>
      <div style={{ height: "200vh" }}>
        <p>Прокрути вниз...</p>
      </div>

      <button
        onClick={() =>
          document.querySelector("h1").scrollIntoView({ behavior: "smooth" })
        }
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          width: "60px",
          height: "60px",
        }}
      >
        ↑
      </button>
    </>
  );
}

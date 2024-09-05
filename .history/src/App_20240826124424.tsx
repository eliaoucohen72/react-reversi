import "./App.css";

function App() {
  const returnBoard = () => {};
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#afcffe",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "600px",
          backgroundColor: "#00a000",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="grid-container">
          {Array.from(Array(64)).forEach((_x) => (
            <div className="grid-item">{_x}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

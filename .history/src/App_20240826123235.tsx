import "./App.css";

function App() {
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
        }}
      >
        <div
          style={{
            width: "500px",
            height: "500px",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "500px",
              height: "500px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;

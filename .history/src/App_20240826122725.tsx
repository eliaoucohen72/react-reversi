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
          top: 0,
          bottom: 0,
          left: '50%',
          right: '50%'
        }}
      ></div>
    </div>
  );
}

export default App;

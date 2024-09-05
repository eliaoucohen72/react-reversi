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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: "500px",
            height: "500px",
            backgroundColor: "blue",
          }}
        ></div>
        <div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
</div>
      </div>
    </div>
  );
}

export default App;

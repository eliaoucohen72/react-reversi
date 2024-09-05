import "./App.css";

function App() {
  
  const returnBoard = () =>
    Array.from({ length: 64 }, (_: number, i: number) => {
      return (
        <div className="grid-item">
          <div style={{ height: "40px", width: "40px", backgroundColor: 'white', borderRadius: '20px' }}></div>
        </div>
      );
    });

  return (
    <div className="wrapper">
      <div className="subWrapper">
        <div className="grid-container">{returnBoard()}</div>
      </div>
    </div>
  );
}

export default App;

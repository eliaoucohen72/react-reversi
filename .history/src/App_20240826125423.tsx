import "./App.css";

function App() {
  const returnBoard = () =>
    Array.from({ length: 64 }, (x: number) => {
      return <div className="grid-item">{x}</div>;
    });

  return (
    <div className="wrapper">
      <div
        style={}
      >
        <div className="grid-container">{returnBoard()}</div>
      </div>
    </div>
  );
}

export default App;

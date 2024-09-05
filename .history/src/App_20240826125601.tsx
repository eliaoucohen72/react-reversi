import "./App.css";

function App() {
  const returnBoard = () =>
    Array.from({ length: 64 }, (x: number, i: number) => {
      return <div className="grid-item">{x}aaa</div>;
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

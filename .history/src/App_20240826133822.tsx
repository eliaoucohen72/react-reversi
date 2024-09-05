import { useState } from "react";
import "./App.css";

const initBoard = () =>
  Array.from({ length: 64 }, (v, i) => {
    return (
      <div className="blank" key={i} onClick={on}>
        <div
          className={
            i === 28 || i === 35 ? "white" : i === 27 || i === 36 ? "black" : ""
          }
        />
      </div>
    );
  });

function App() {
  const [board, setBoard] = useState(initBoard());

  return (
    <div className="wrapper">
      <div className="subWrapper">
        <div className="grid-container">{board}</div>
      </div>
    </div>
  );
}

export default App;

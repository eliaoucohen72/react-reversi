import { useState } from "react";
import "./App.css";


function App() {
  const [board, setBoard] = useState(initBoard());
  const initBoard = () =>
    Array.from({ length: 64 }, (v, i) => {
      return (
        <div className="blank" key={i} onClick={onClick}>
          <div
            className={
              i === 28 || i === 35 ? "white" : i === 27 || i === 36 ? "black" : ""
            }
          />
        </div>
      );
    });

  return (
    <div className="wrapper">
      <div className="subWrapper">
        <div className="grid-container">{board}</div>
      </div>
    </div>
  );
}

export default App;

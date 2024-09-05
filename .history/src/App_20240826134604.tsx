import { useState } from "react";
import "./App.css";

function App() {
  const onClick = (i: number) => {
    console.log(i);
    console.log(board);
  };

  const initBoard = () =>
    Array.from({ length: 64 }, (v, i) => {
      return (
        // <div className="item" key={i}>
        <div
          key={i}
          onClick={() => onClick(i)}
          className={
            i === 28 || i === 35
              ? "white"
              : i === 27 || i === 36
              ? "black"
              : "empty"
          }
        />
        // </div>
      );
    });

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

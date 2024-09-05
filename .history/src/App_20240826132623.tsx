import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array.from({ length: 64 }, (_: number, i: number) => {)
  const [isFirstStep, setIsFirstStep] = useState(true);

  // useEffect(() => {
  //   if (isFirstStep) {
  //     setIsFirstStep(false);
  //   }
  // }, [isFirstStep]);

  const getGridColor = (i: number) => {
    if (isFirstStep) {
      if (i == 28 || i == 35) {
        return "white-grid-item";
      } else if (i === 27 || i === 36) {
        return "black-grid-item";
      } else return "";
    }
    console.log(i);
    console.log(isFirstStep);

    return isFirstStep && (i === 27 || i === 28 || i === 35 || i === 36)
      ? "white-grid-item"
      : "";
  };

  const returnBoard = () =>
    Array.from({ length: 64 }, (_: number, i: number) => {
      return (
        <div className="grid-item" key={i}>
          <div className={getGridColor(i)}>{}</div>
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

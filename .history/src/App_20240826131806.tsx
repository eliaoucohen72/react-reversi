import {useEffect, useState} from "react";
import "./App.css";

function App() {
  const [isFirstStep, setIsFirstStep] = useState(true);

  useEffect(() => {
    if(isFirstStep){

    }
  }, []);

  const getGridColor = (i: number) => isFirstStep && (i === 42 || i === ) "white-grid-item";

  const returnBoard = () =>
    Array.from({ length: 64 }, (_: number, i: number) => {
      return (
        <div className="grid-item">
          <div className={getGridColor(i)}>{i}</div>
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

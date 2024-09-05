import { useState } from "react";
import "./App.css";

type Player = "black" | "white";

const isValidMove = (
  board: string[],
  index: number,
  player: Player
): boolean => {
  const directions = [-1, 1, -8, 8, -9, 9, -7, 7];
  const opponent = player === "black" ? "white" : "black";
  let valid = false;

  for (const direction of directions) {
    let i = index + direction;
    let foundOpponent = false;

    while (i >= 0 && i < 64 && board[i] === opponent) {
      i += direction; 
      foundOpponent = true;
    }

    // Si on trouve un pion du joueur après avoir trouvé des pions adverses
    if (foundOpponent && i >= 0 && i < 64 && board[i] === player) {
      valid = true;
    }
  }

  return valid;
};

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");
  const [board, setBoard] = useState<string[]>(() => initBoard());

  // Initialiser le plateau avec les pions de départ
  function initBoard(): string[] {
    const initialBoard = Array(64).fill("empty");
    initialBoard[27] = "black";
    initialBoard[28] = "white";
    initialBoard[35] = "white";
    initialBoard[36] = "black";
    return initialBoard;
  }

  const handleClick = (i: number) => {
    if (board[i] === "empty" && isValidMove(board, i, currentPlayer)) {
      const newBoard = [...board];
      newBoard[i] = currentPlayer;
      setBoard(newBoard);

      // Passer au joueur suivant
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    } else {
      console.log("Coup invalide");
    }
  };

  return (
    <div className="wrapper">
      <div className="subWrapper">
        <div className="grid-container">
          {board.map((cell, i) => (
            <div className="item" key={i}>
              <div onClick={() => handleClick(i)} className={cell} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

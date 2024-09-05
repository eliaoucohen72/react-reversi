import { useState } from "react";
import "./App.css";

type Player = "black" | "white";

function App() {
  const [board, setBoard] = useState(initBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");

  const initBoard = () => {
    // Initialiser le plateau avec 64 cases
    const initialBoard = Array(64).fill(null);
    initialBoard[27] = "black";
    initialBoard[28] = "white";
    initialBoard[35] = "white";
    initialBoard[36] = "black";
    return initialBoard;
  };

  const onClick = (i: number) => {
    if (board[i] !== null) return; // Ne pas permettre de jouer sur une case occupée
    const newBoard = [...board];
    newBoard[i] = currentPlayer;

    // Appliquer la capture de pions
    const flippedBoard = flipPieces(newBoard, i, currentPlayer);

    setBoard(flippedBoard);
    setCurrentPlayer(currentPlayer === "black" ? "white" : "black"); // Changer de joueur
  };

  const flipPieces = (board: (Player | null)[], index: number, player: Player) => {
    // Logique de capture : vérifier les directions et retourner les pions si nécessaire
    const directions = [
      -1, 1, -8, 8, -9, -7, 9, 7 // Gauche, Droite, Haut, Bas, diagonales
    ];
    directions.forEach((dir) => {
      const flipped = [];
      let i = index + dir;
      while (board[i] && board[i] !== player && i >= 0 && i < 64) {
        flipped.push(i);
        i += dir;
      }
      if (board[i] === player) {
        flipped.forEach((flipIndex) => {
          board[flipIndex] = player;
        });
      }
    });
    return board;
  };

  const renderSquare = (i: number) => (
    <div className="item" key={i}>
      <div
        onClick={() => onClick(i)}
        className={
          board[i] === "white"
            ? "white"
            : board[i] === "black"
            ? "black"
            : "empty"
        }
      />
    </div>
  );

  return (
    <div className="wrapper">
      <div className="subWrapper">
        <div className="grid-container">
          {Array.from({ length: 64 }, (_, i) => renderSquare(i))}
        </div>
      </div>
    </div>
  );
}

export default App;

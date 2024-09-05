import { CSSProperties, useState } from "react";
import style from "./style";

export type Player = "black" | "white";
export type Cell = Player | "empty";

// Fonction pour vérifier et retourner les pions capturés
const flipPieces = (board: Cell[], index: number, player: Player): Cell[] => {
  const directions = [-1, 1, -8, 8, -9, 9, -7, 7];
  const opponent = player === "black" ? "white" : "black";
  const newBoard: Cell[] = [...board]; // Copier le plateau

  for (const direction of directions) {
    let i = index + direction;
    const toFlip = []; // Pions à retourner

    while (i >= 0 && i < 64 && board[i] === opponent) {
      toFlip.push(i); // Ajouter les positions des pions adverses
      i += direction;
    }

    // Si on trouve un pion du joueur à la fin de la ligne d'adversaires
    if (i >= 0 && i < 64 && board[i] === player) {
      toFlip.forEach((pos) => {
        newBoard[pos] = player; // Retourner les pions
      });
    }
  }

  return newBoard;
};

// Fonction pour vérifier si un coup est valide
const isValidMove = (board: Cell[], index: number, player: Player): boolean => {
  if (board[index] !== "empty") return false; // La case doit être vide

  const directions = [-1, 1, -8, 8, -9, 9, -7, 7];
  const opponent = player === "black" ? "white" : "black";

  for (const direction of directions) {
    let i = index + direction;
    let foundOpponent = false;

    while (i >= 0 && i < 64 && board[i] === opponent) {
      i += direction;
      foundOpponent = true;
    }

    // Si un pion du joueur est trouvé après les pions adverses
    if (foundOpponent && i >= 0 && i < 64 && board[i] === player) {
      return true;
    }
  }

  return false;
};

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");
  const [board, setBoard] = useState<Cell[]>(() => initBoard());

  // Initialiser le plateau avec les pions de départ
  function initBoard(): Cell[] {
    const initialBoard = Array(64).fill("empty");
    initialBoard[27] = "black";
    initialBoard[28] = "white";
    initialBoard[35] = "white";
    initialBoard[36] = "black";
    return initialBoard;
  }

  const handleClick = (i: number) => {
    if (isValidMove(board, i, currentPlayer)) {
      let newBoard = [...board];
      newBoard[i] = currentPlayer; // Placer le pion
      newBoard = flipPieces(newBoard, i, currentPlayer); // Retourner les pions
      setBoard(newBoard); // Mettre à jour le plateau

      // Passer au joueur suivant
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    } else {
      console.log("Coup invalide");
    }
  };

  return (
    <div style={style.wrapper as CSSProperties}>
      <div style={style.subWrapper as CSSProperties}>
        <div>
          <div
            style={
              style.player("white", currentPlayer === "white") as CSSProperties
            }
          />
          <div style={style.score("white") as CSSProperties}>a</div>
        </div>
        <div style={style.board as CSSProperties}>
          <div style={style.gridContainer}>
            {board.map((cell, i) => (
              <div style={style.item as CSSProperties} key={i}>
                <div onClick={() => handleClick(i)} style={style.coin(cell)} />
              </div>
            ))}
          </div>
        </div>
        <div
          style={
            style.player("black", currentPlayer === "black") as CSSProperties
          }
        />
      </div>
    </div>
  );
}

export default App;

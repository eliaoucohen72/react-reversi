import { CSSProperties, useMemo, useState } from "react";
import style from "./style";
import { css } from "./utils";

export type Player = "black" | "white";
export type Cell = Player | "empty";

const isValidMove = (board: Cell[], index: number, player: Player): boolean => {
  if (board[index] !== "empty") return false;

  const directions = [-1, 1, -8, 8, -9, 9, -7, 7];
  const opponent = player === "black" ? "white" : "black";

  for (const direction of directions) {
    let i = index + direction;
    let foundOpponent = false;

    while (i >= 0 && i < 64 && board[i] === opponent) {
      i += direction;
      foundOpponent = true;
    }

    if (foundOpponent && i >= 0 && i < 64 && board[i] === player) {
      return true;
    }
  }

  return false;
};

const Notification = ({ message }: { message: string }) => (
  <div style={css(style.notification)}>{message}</div>
);

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");
  const [board, setBoard] = useState<Cell[]>(() => initBoard());
  const [notification, setNotification] = useState<string | null>(null);

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
      newBoard[i] = currentPlayer;
      newBoard = flipPieces(newBoard, i, currentPlayer);
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    } else {
      setNotification("Invalid move");
      setTimeout(() => setNotification(null), 3000);
    }
  };

  const renderedWhiteScore = useMemo(
    () => (
      <div style={style.score}>{board.filter((e) => e === "white").length}</div>
    ),
    [board]
  );

  const renderedBlackScore = useMemo(
    () => (
      <div style={style.score}>{board.filter((e) => e === "black").length}</div>
    ),
    [board]
  );

  return (
    <div style={css(style.wrapper)}>
      {notification && <Notification message={notification} />}
      <div style={css(style.subWrapper)}>
        <div style={style.playerWrapper as CSSProperties}>
          <div style={css(style.player("white", currentPlayer === "white"))} />
          {renderedWhiteScore}
        </div>
        <div style={css(style.board)}>
          <div style={style.gridContainer}>
            {board.map((cell, i) => (
              <div style={css(style.item)} key={i}>
                <div onClick={() => handleClick(i)} style={style.coin(cell)} />
              </div>
            ))}
          </div>
        </div>
        <div style={style.playerWrapper as CSSProperties}>
          <div style={css(style.player("black", currentPlayer === "black"))} />
          {renderedBlackScore}
        </div>
      </div>
    </div>
  );
}

export default App;

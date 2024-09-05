import { CSSProperties, useMemo, useState } from "react";
import style from "./style";
import { css, flipPieces, isValidMove } from "./utils";
import { Cell, Player } from "./types";
import Notifications from "./Notifications";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");
  const [board, setBoard] = useState<Cell[]>(() => initBoard());
  const [notification, setNotification] = useState<string | null>(null);

  const initBoard = (): Cell[] => {
    const initialBoard = Array(64).fill("empty");
    initialBoard[27] = "black";
    initialBoard[28] = "white";
    initialBoard[35] = "white";
    initialBoard[36] = "black";
    return initialBoard;
  };

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
      {notification && <Notifications message={notification} />}
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

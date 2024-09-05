import { memo } from "react";
import style from "./style";
import { css, isValidMove } from "./utils";
import { Cell } from "./types";

const Board = ({ board, currentPlayer }: { board: Cell[] }) => {
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

  return (
    <div style={css(style.board)}>
      <div style={style.gridContainer}>
        {board.map((cell, i) => (
          <div style={css(style.item)} key={i}>
            <div onClick={() => handleClick(i)} style={style.coin(cell)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Board);

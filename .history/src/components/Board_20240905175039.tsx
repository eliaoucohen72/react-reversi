import { memo } from "react";
import style from "../style";
import { css, flipPieces, isValidMove } from "../utils";
import { Cell, Player } from "../types";

type BoardProps = {
  board: Cell[];
  currentPlayer: Player;
  setNotification: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<Player>>;
  setBoard: React.Dispatch<React.SetStateAction<Cell[]>>;
};

const Board = ({
  board,
  currentPlayer,
  setNotification,
  setCurrentPlayer,
  setBoard,
}: BoardProps) => {
  const launchNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleClick = (i: number) => {
    if (isValidMove(board, i, currentPlayer)) {
      let newBoard = [...board];
      newBoard[i] = currentPlayer;
      newBoard = flipPieces(newBoard, i, currentPlayer);

      if (newBoard.filter((e) => e === "black").length === 0) {
        launchNotification("White wins. The game will be restarted in 3 seconds")
      } else if (newBoard.filter((e) => e === "white").length === 0) {
        setNotification("Black wins. The game will be restarted in 3 seconds");
        setTimeout(() => setNotification(null), 3000);
      } else {
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
      }
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

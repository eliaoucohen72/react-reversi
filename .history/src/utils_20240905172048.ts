import {CSSProperties} from "react";

export const css = (style: object) => style as CSSProperties

export const flipPieces = (board: Cell[], index: number, player: Player): Cell[] => {
    const directions = [-1, 1, -8, 8, -9, 9, -7, 7];
    const opponent = player === "black" ? "white" : "black";
    const newBoard: Cell[] = [...board];
  
    for (const direction of directions) {
      let i = index + direction;
      const toFlip = [];
  
      while (i >= 0 && i < 64 && board[i] === opponent) {
        toFlip.push(i);
        i += direction;
      }
  
      if (i >= 0 && i < 64 && board[i] === player) {
        toFlip.forEach((pos) => {
          newBoard[pos] = player;
        });
      }
    }
  
    return newBoard;
  };
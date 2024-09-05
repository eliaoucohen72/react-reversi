import { memo } from "react";
import style from "./style";
import { css } from "./utils";
import {Cell} from "./types";

const Board = ({board}: {board: Cell[]}) => {
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

import { memo, useMemo } from "react";
import { css } from "./utils";
import style from "./style";
import { Player } from "./types";

const Player = ({
  board,
  currentPlayer,
}: {
  board: any;
  currentPlayer: Player;
}) => {
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
    <div style={css(style.playerWrapper)}>
      <div style={css(style.player("white", currentPlayer === "white"))} />
      {renderedWhiteScore}
    </div>
  );
};

export default memo(Player);

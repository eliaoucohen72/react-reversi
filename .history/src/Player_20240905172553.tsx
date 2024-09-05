import { memo } from "react";
import { css } from "./utils";
import style from "./style";

const Player = ({ board, currentPlayer }: { message: string }) => {
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

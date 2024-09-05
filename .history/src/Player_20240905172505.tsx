import { memo } from "react";
import { css } from "./utils";
import style from "./style";

const Player = ({ message }: { message: string }) => (
  <div style={css(style.playerWrapper)}>
    <div style={css(style.player("white", currentPlayer === "white"))} />
    {renderedWhiteScore}
  </div>
);

export default memo(Player);

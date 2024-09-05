import { memo } from "react";
import { css } from "./utils";
import style from "./style";

const Player = ({ message }: { message: string }) => (
  <div style={css(style.notification)}>{message}</div>
);

export default memo(Notification);

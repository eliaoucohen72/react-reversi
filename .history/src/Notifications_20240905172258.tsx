import { memo } from "react";
import {css} from "./utils";

const Notification = ({ message }: { message: string }) => (
  <div style={css(style.notification)}>{message}</div>
);

export default memo(Notification);

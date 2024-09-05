import { memo } from "react";

const Notification = ({ message }: { message: string }) => (
  <div style={css(style.notification)}>{message}</div>
);

export default memo(Notification);

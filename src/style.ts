import { Cell, Player } from "./types";

const COLORS = {
  WHITE: "#ffffff",
  BLACK: "#000000",
  RED: "#ff0000",
  TRANSPARENT: "transparent",
  BACKGROUND: "#afcffe",
  BOARD: "#00a000",
  BOARD_OUTLINE: "#2196f3",
  ITEM: "rgba(255, 255, 255, 0.8)",
};

const styles = {
  notification: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: COLORS.RED,
    color: '#ffffff',
    padding: '10px',
    borderRadius: '5px',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: COLORS.BACKGROUND,
    position: "relative",
  },
  subWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    position: "absolute",
    top: "50%",
    left: "0%",
    transform: "translate(0%, -50%)",
  },
  playerWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  player: (player: Player, isCurrentPlayer: boolean) => ({
    width: "80px",
    height: "80px",
    borderRadius: "44px",
    backgroundColor: player === "white" ? COLORS.WHITE : COLORS.BLACK,
    border: isCurrentPlayer
      ? `4px solid ${COLORS.RED}`
      : `4px solid ${COLORS.TRANSPARENT}`,
  }),
  score: {
    fontSize: "20px",
    fontWeight: "700",
  },
  board: {
    width: "700px",
    height: "600px",
    backgroundColor: COLORS.BOARD,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 12.5%)",
    backgroundColor: COLORS.BOARD_OUTLINE,
    padding: "10px",
    width: "500px",
    height: "500px",
  },
  item: {
    backgroundColor: COLORS.ITEM,
    border: `1px solid ${COLORS.BLACK}`,
    textAlign: "center",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  coin: (cell: Cell) => ({
    height: "80%",
    width: "80%",
    borderRadius: "30px",
    backgroundColor:
      cell === "black" ? COLORS.BLACK : cell === "white" ? COLORS.WHITE : "",
  }),
};

export default styles;

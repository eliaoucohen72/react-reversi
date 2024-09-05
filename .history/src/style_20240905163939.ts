import { Cell, Player } from "./App";

const COLORS = {
    
}
const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#afcffe",
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
  player: (player: Player, isCurrentPlayer: boolean) => ({
    width: "80px",
    height: "80px",
    borderRadius: "44px",
    backgroundColor: player === "white" ? "#ffffff" : "#000000",
    border: isCurrentPlayer ? "4px solid red" : "none",
  }),
  board: {
    width: "700px",
    height: "600px",
    backgroundColor: "#00a000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(8, 12.5%)",
    backgroundColor: "#2196f3",
    padding: "10px",
    width: "500px",
    height: "500px",
  },
  item: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    border: "1px solid rgba(0, 0, 0, 0.8)",
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
      cell === "black"
        ? "rgba(0, 0, 0)"
        : cell === "white"
        ? "rgba(255, 255, 255)"
        : "transparent",
  }),
};

export default styles;

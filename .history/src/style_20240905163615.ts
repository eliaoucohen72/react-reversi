import { Cell, Player } from "./App";

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#afcffe",
    position: "relative",
  },
  player: (player: Player, isCurrentPlayer: boolean) => ({
    // position: "absolute",
    width: "80px",
    height: "80px",
    // top: "50%",
    borderRadius: "44px",
    // left: player === "white" ? "0%" : "auto",
    // right: player === "white" ? "auto" : "0%",
    backgroundColor: player === "white" ? "#ffffff" : "#000000",
    // marginLeft: player === "white" ? "50px" : "0",
    // marginRight: player === "white" ? "0" : "50px",
    border: isCurrentPlayer ? "4px solid red" : "none",
  }),
  board: {
    // position: "absolute",
    width: "700px",
    height: "600px",
    backgroundColor: "#00a000",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
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

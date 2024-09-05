import { Cell, Player } from "./App";

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "#afcffe",
    position: "relative",
  },
  player: (player: Player) => ({
    position: "absolute",
    width: "80px",
    height: "80px",
    top: "50%",
    left: "0%",
    right: "0%",
    left: player === "white" ? "0%" : '100%',
    right: player === "white" ? "0%" : '100%',
    transform: player === "white" ? "translate(-50%, -50%)" : "translate(0%, -50%)",
    backgroundColor: player === "white" ? "#ffffff" : "#000000",
    borderRadius: "40px",
    marginLeft: "50px",
  }),
  whitePlayer: {
    position: "absolute",
    width: "80px",
    height: "80px",
    top: "50%",
    left: "0%",
    transform: "translate(0%, -50%)",
    backgroundColor: "#ffffff",
    borderRadius: "40px",
    marginLeft: "50px",
  },
  blackPlayer: {
    position: "absolute",
    width: "80px",
    height: "80px",
    top: "50%",
    right: "0%",
    transform: "translate(0%, -50%)",
    backgroundColor: "#000000",
    borderRadius: "40px",
    marginRight: "50px",
  },
  subWrapper: {
    position: "absolute",
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

import { useState } from "react";
import style from "./style";
import { css, flipPieces, initBoard, isValidMove } from "./utils";
import { Cell, Player } from "./types";
import Notifications from "./Notifications";
import PlayerStatus from "./PlayerStatus";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");
  const [board, setBoard] = useState<Cell[]>(() => initBoard());
  const [notification, setNotification] = useState<string | null>(null);

  const handleClick = (i: number) => {
    if (isValidMove(board, i, currentPlayer)) {
      let newBoard = [...board];
      newBoard[i] = currentPlayer;
      newBoard = flipPieces(newBoard, i, currentPlayer);
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "black" ? "white" : "black");
    } else {
      setNotification("Invalid move");
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <div style={css(style.wrapper)}>
      {notification && <Notifications message={notification} />}
      <div style={css(style.subWrapper)}>
        <PlayerStatus board={board} currentPlayer="white" />
        
        <PlayerStatus board={board} currentPlayer="black" />
      </div>
    </div>
  );
}

export default App;

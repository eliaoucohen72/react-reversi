import { useState } from "react";
import style from "./style";
import { css, initBoard } from "./utils";
import { Cell, Player } from "./types";
import Notifications from "./components/Notifications";
import PlayerStatus from "./components/PlayerStatus";
import Board from "./components/Board";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");
  const [board, setBoard] = useState<Cell[]>(() => initBoard());
  const [notification, setNotification] = useState<string | null>(null);

  return (
    <div style={css(style.wrapper)}>
      {notification && <Notifications message={notification} />}
      <div style={css(style.subWrapper)}>
        {console.log(currentPlayer)}
        <PlayerStatus
          board={board}
          player="white"
          isCurrentPlayer={currentPlayer === "white"}
        />
        <Board
          board={board}
          currentPlayer={currentPlayer}
          setBoard={setBoard}
          setCurrentPlayer={setCurrentPlayer}
          setNotification={setNotification}
        />
        <PlayerStatus
          board={board}
          player="black"
          isCurrentPlayer={currentPlayer === "black"}
        />
      </div>
    </div>
  );
}

export default App;

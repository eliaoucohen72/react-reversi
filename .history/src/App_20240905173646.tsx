import { useState } from "react";
import style from "./style";
import { css, initBoard } from "./utils";
import { Cell, Player } from "./types";
import Notifications from "./Notifications";
import PlayerStatus from "./PlayerStatus";
import Board from "./Board";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<Player>("black");
  const [board, setBoard] = useState<Cell[]>(() => initBoard());
  const [notification, setNotification] = useState<string | null>(null);

  return (
    <div style={css(style.wrapper)}>
      {notification && <Notifications message={notification} />}
      <div style={css(style.subWrapper)}>
        <PlayerStatus board={board} currentPlayer="white" />
        <Board
          board={board}
          currentPlayer={currentPlayer}
          setBoard={setBoard}
          setCurrentPlayer={setCurrentPlayer}
          setNotification={setNotification}
        />
        <PlayerStatus board={board} currentPlayer="black" />
      </div>
    </div>
  );
}

export default App;

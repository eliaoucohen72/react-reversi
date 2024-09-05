import {memo} from "react"

const Board = () => {
return <div style={css(style.board)}>
<div style={style.gridContainer}>
  {board.map((cell, i) => (
    <div style={css(style.item)} key={i}>
      <div onClick={() => handleClick(i)} style={style.coin(cell)} />
    </div>
  ))}
</div>
</div>
}

export default memo(Board)
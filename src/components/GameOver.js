import React from 'react'
import './GameOver.css'

function GameOver({ retry }) {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Resetar jogo</button>

    </div>
  )
}

export default GameOver

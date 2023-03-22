import React, { useState } from "react";

function Square({ value, oneSquareClick }) {
  return (
    <button className="square" onClick={oneSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }
  return (
    <div>
      <div className="board-row">
        <Square value={squares[0]} oneSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} oneSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} oneSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} oneSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} oneSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} oneSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} oneSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} oneSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} oneSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

// Почему важна неизменность

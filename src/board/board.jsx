import React, { useState } from "react";
import Square from "../square/square";
import calculateWinner from "../helpers/winerchecker";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const handleClick = (i) => {
    const slicedSquares = squares.slice();
    if (calculateWinner(slicedSquares) || slicedSquares[i]) {
      return;
    }
    slicedSquares[i] = xIsNext ? "X" : "O";
    setXIsNext(!xIsNext);
    setSquares(slicedSquares);
  };
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Pobedil " + winner;
  } else {
    status = " Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        { renderSquare(0)}
        { renderSquare(1)}
        { renderSquare(2)}
      </div>
      <div className="board-row">
        { renderSquare(3)}
        { renderSquare(4)}
        { renderSquare(5)}
      </div>
      <div className="board-row">
        { renderSquare(6)}
        { renderSquare(7)}
        { renderSquare(8)}
      </div>
    </div>
  );
}

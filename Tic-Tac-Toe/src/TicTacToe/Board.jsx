import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setXTurn] = useState(true);

  const CheckWinner = () => {
    const WinnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      //diagonal 1
      [0, 4, 8],
      [2, 4, 6],
      //vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let logic of WinnerLogic) {
      const [a, b, c] = logic;

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = CheckWinner();

  const HandelClick = (index) => {
    //creating a copy of my existed state  All board main logic goes down
    if (state[index] !== null) {
      return;
    }

    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setXTurn(!isXTurn);
  };

  const HandelReset = () => {
    setState([...new Array(9)].map(() => null));
    setXTurn(true);
  };

  return (
    <div className="board-container">
      {isWinner ? (
        <>
          <div className="cont">
            {isWinner} won the game
            <button className="btn" onClick={HandelReset}>
              {" "}
              Play Again{" "}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="player">
            <h3>player {isXTurn ? "X" : "O"} step your next move</h3>
          </div>
          <div className="board-row">
            <Square onClick={() => HandelClick(0)} value={state[0]} />
            <Square onClick={() => HandelClick(1)} value={state[1]} />
            <Square onClick={() => HandelClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => HandelClick(3)} value={state[3]} />
            <Square onClick={() => HandelClick(4)} value={state[4]} />
            <Square onClick={() => HandelClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => HandelClick(6)} value={state[6]} />
            <Square onClick={() => HandelClick(7)} value={state[7]} />
            <Square onClick={() => HandelClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;

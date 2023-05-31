import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const calculateWinner = (board) => {
    if (board[0] === board[1] && board[0] === board[2] && board[0] !== null) {
      return board[0];
    }
    if (board[3] === board[4] && board[3] === board[5] && board[3] !== null) {
      return board[3];
    }
    if (board[6] === board[7] && board[6] === board[8] && board[6] !== null) {
      return board[6];
    }
    if (board[0] === board[3] && board[0] === board[6] && board[0] !== null) {
      return board[0];
    }
    if (board[1] === board[4] && board[1] === board[7] && board[1] !== null) {
      return board[1];
    }
    if (board[2] === board[5] && board[2] === board[8] && board[2] !== null) {
      return board[2];
    }
    if (board[0] === board[4] && board[0] === board[8] && board[0] !== null) {
      return board[0];
    }
    if (board[2] === board[4] && board[2] === board[6] && board[2] !== null) {
      return board[2];
    }
    return null;
  };
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setTie(false);
    setWinnerPlayer(null);
  };
  const [winnerPlayer, setWinnerPlayer] = useState(null); // [X, O, null]
  const [tie, setTie] = useState(false);
  useEffect(() => {
    setWinnerPlayer(calculateWinner(board));
    if (board.every((el) => el !== null && winnerPlayer !== null)) {
      setTie(true);
    }
  }, [board]);
  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winnerPlayer || boardCopy[i]) {
      setWinnerPlayer(winner);
      return;
    }
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };
  console.log(board, winnerPlayer, tie);
  return (
    <div className='App'>
      <header className='min-h-screen py-10 max-w-5xl m-auto flex items-center justify-center text-center flex-col gap-4'>
        <h1 className='text-3xl font-semibold'>Tick Tack Toe Game</h1>
        <div className='p-1 rounded shadow bg-yellow-900'>
          <div className='flex items-center'>
            <div
              onClick={() => handleClick(0)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[0]}
            </div>
            <div
              onClick={() => handleClick(1)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[1]}
            </div>
            <div
              onClick={() => handleClick(2)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[2]}
            </div>
          </div>
          <div className='flex items-center'>
            <div
              onClick={() => handleClick(3)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[3]}
            </div>
            <div
              onClick={() => handleClick(4)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[4]}
            </div>
            <div
              onClick={() => handleClick(5)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[5]}
            </div>
          </div>
          <div className='flex items-center'>
            <div
              onClick={() => handleClick(6)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[6]}
            </div>
            <div
              onClick={() => handleClick(7)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[7]}
            </div>
            <div
              onClick={() => handleClick(8)}
              className='h-20 w-20 bg-white text-black font-bold flex items-center justify-center text-4xl border cursor-pointer'
            >
              {board[8]}
            </div>
          </div>
        </div>
        <div>
          {winnerPlayer ? (
            <p className='text-xl font-semibold'>
              The Winner is {winnerPlayer}
            </p>
          ) : (
            ""
          )}
          {tie ? <p className='text-xl font-semibold'>It's a Tie</p> : ""}
        </div>

        <div>
          <button
            onClick={() => resetBoard(board)}
            className='text-sm font-semibold px-3 py-1 bg-yellow-900 rounded-full text-white hover:bg-yellow-800 hover:shadow'
          >
            Reset the game
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

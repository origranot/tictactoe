import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Box from './components/Box/Box'
import Board from './components/Board/Board'
import StartForm from './components/StartForm/StartForm'
import Info from './components/Info/Info'


const BOARD_SIZE = 3;


function App() {

  const [players, setPlayers] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [hasWinner, setHasWinner] = useState(false);
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true);

  const startGame = (players) => {
    setPlayers(players);
    setGameStarted(true);
  }

  const clickedSquare = () => {
    setIsFirstPlayerTurn(!isFirstPlayerTurn);
  }

  const haveWinner = () => {
    let winner = players[isFirstPlayerTurn ? 0 : 1];
    setHasWinner(true);
    alert(winner);
  }

  return (
    <>
      <Box>
        <Board size={BOARD_SIZE} isFirstPlayerTurn={isFirstPlayerTurn} handleClick={clickedSquare} gameStarted={gameStarted} haveWinner={haveWinner}/>
      </Box>
      {gameStarted && !hasWinner ? <Info players={players} isFirstPlayerTurn={isFirstPlayerTurn} /> : <StartForm  hasWinner={hasWinner} handleStart={startGame} />}
    </>
  );
}

export default App;

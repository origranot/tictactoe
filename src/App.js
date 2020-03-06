import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Box from './components/Box/Box'
import Board from './components/Board/Board'
import StartForm from './components/StartForm/StartForm'
import Info from './components/Info/Info'


const NUMBER_OF_ROWS = 3;
const NUMBER_OF_COLS = 3;


function App() {

  const [players, setPlayers] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [playerTurn, setPlayerTurn] = useState(0);

  const startGame = (players) => {

    setGameStarted(true);
  }

  return (
    <>
      <Box>
        <Board rows={NUMBER_OF_ROWS} cols={NUMBER_OF_COLS} />
      </Box>
      {gameStarted ? <Info /> : <StartForm handleStart={startGame} />}
    </>
  );
}

export default App;

import React, {
  useState
} from 'react';
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
  const [winner, setWinner] = useState(null);
  const [isFirstPlayerTurn, setIsFirstPlayerTurn] = useState(true);

  const currentBoard = React.createRef();

  const startGame = (players) => {
    setPlayers(players);
    setGameStarted(true);
    setWinner(null);
  }

  const clickedSquare = () => {
    setIsFirstPlayerTurn(!isFirstPlayerTurn);
  }

  const handleGameEnded = (status) => {
    switch (status) {
      case 'win':
        let winner = players[isFirstPlayerTurn ? 0 : 1];
        setWinner(winner);
        break;

      default: // Tie
        setWinner(undefined);
        break;
    }
  }

  const playAgain = () => {
    setWinner(null);
    currentBoard.current.initBoard();
  }



  return (
    <>
      <Box >
        <Board size={BOARD_SIZE} isFirstPlayerTurn={isFirstPlayerTurn} handleClick={clickedSquare} gameStarted={gameStarted} winner={winner} gameEnded={handleGameEnded} ref={currentBoard} />
      </Box>

      {gameStarted ? < Info players={players} isFirstPlayerTurn={isFirstPlayerTurn} winner={winner} playAgain={playAgain} /> :
        <StartForm winner={winner} handleStart={startGame} />}
    </>
  );
}

export default App;
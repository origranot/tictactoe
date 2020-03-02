import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Box from './components/Box/Box'
import Board from './components/Board/Board'
import StartForm from './components/StartForm/StartForm'

function App() {
  return (
    <>
      <Box>
        <Board rows={3} cols={3} />
      </Box>
      <StartForm />
    </>
  );
}

export default App;

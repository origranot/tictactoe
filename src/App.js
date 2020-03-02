import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Board from './components/Board/Board'

function App() {
  return (
      <div className="box">
        <Board rows={3} cols={3}/>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './styles/App.css';
import Board from './Board.js';
import WordList from './WordList.js';
import ScoreReport from './ScoreReport.js';
import AppState from './AppState.js';

import BoardPopulator from './BoardPopulatorUtil.js';

class App extends Component {
  tileRows = BoardPopulator(6, 6);

  handleInput = (event) => {
    console.log(event);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Play Boggle!</h1>
        </header>
        <div className="container">
          <Board tileRows={this.tileRows}/>
          <WordList />
          <input type="text" name="entry" onChange={this.handleInput} />
          <ScoreReport />
        </div>
      </div>
    );
  }
}

export default App;

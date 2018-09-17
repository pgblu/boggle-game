import React, { Component } from 'react';
import './styles/App.css';
import { observer } from 'mobx-react';
import Board from './Board.js';
import WordList from './WordList.js';
import ScoreReport from './ScoreReport.js';
import SizeSelector from './SizeSelector.js';
import AppState from './AppState.js';

import BoardPopulator from './BoardPopulatorUtil.js';

@observer
class App extends Component {
  tileRows = () => BoardPopulator(AppState.gridWidth);

  handleInput = (event) => {
    AppState.foundWords.push(event.target.value);
  }

  renderBoard() {
    return (
      <Board tileRows={this.tileRows()} />
    )
  }

  render() {
    console.log(this.tileRows());
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Play Boggle!</h1>
        </header>
        <SizeSelector sizes={[4,5,6]} />
        <div className="container">
          {this.renderBoard()}
          <WordList />
          <input type="text" name="entry" onChange={this.handleInput} />
          <ScoreReport />
        </div>
      </div>
    );
  }
}

export default App;

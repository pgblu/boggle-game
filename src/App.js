import React, { Component } from 'react';
import './styles/App.css';
import { observer } from 'mobx-react';
import Board from './Board.js';
import WordList from './WordList.js';
import InputForm from './InputForm.js';
import ScoreReport from './ScoreReport.js';
import SizeSelector from './SizeSelector.js';
import AppState from './AppState.js';

import BoardPopulator from './utils/BoardPopulatorUtil.js';

@observer
class App extends Component {
  tileRows = () => BoardPopulator(AppState.gridWidth);

  renderBoard() {
    return (
      <Board tileRows={this.tileRows()} />
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Play Boggle!</h1>
        </header>
        <SizeSelector sizes={[4,5,6]} />
        <div className="container">
          {this.renderBoard()}
          <WordList />
          <InputForm />
          <ScoreReport />
        </div>
      </div>
    );
  }
}

export default App;

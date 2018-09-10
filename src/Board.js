// @flow

import React, { Component } from 'react';
import TileRow from './TileRow.js';

import AppState from './AppState.js';

import './styles/Board.css';

type BoardProps = {
  tileRows: Array<string>
}

class Board extends Component<BoardProps> {
  props: BoardProps;
  renderLetters(letters) {
    return (
      <TileRow content={letters} />
    )
  }

  render() {
    console.log(this.props.tileRows);
    return (
      <div className="board">
        {this.props.tileRows.map(letters => this.renderLetters(letters))}
      </div>
    )
  }
}

export default Board;
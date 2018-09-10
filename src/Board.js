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
  renderLetters(letters, index) {
    return (
      <TileRow content={letters} key={index} id={index}/>
    )
  }

  render() {
    console.log(this.props.tileRows);
    return (
      <div className="board">
        {this.props.tileRows.map((letters, index) => this.renderLetters(letters, index))}
      </div>
    )
  }
}

export default Board;
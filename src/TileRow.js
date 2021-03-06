import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Tile from './Tile.js';

import './styles/TileRow.css';

import AppState from './AppState.js';

type TileRowProps = {
  content: string,
  key: number,
  id: number
};

@observer
class TileRow extends Component<TileRowProps> {
  props: TileRowProps;

  renderLetter(letter, prefix, index) {
    const myKey = 10 * prefix + index;
    return (
      <Tile letter={letter} chosen={false} key={myKey} id={myKey}/>
      )
  };

  render() {
    const content = this.props.content;
    const prefix = this.props.id;
    return (
      <div className="tile-row" style={{gridTemplateColumns: `repeat(${AppState.gridWidth}, 1fr)`}}>
        {content.map((letter, index) => this.renderLetter(letter, prefix, index))}
      </div>
    )
  }
}

export default TileRow;
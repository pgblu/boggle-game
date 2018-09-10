import React, { Component } from 'react';
import Tile from './Tile.js';

import AppState from './AppState.js';

type TileRowProps = {
  content: string
}


class TileRow extends Component<TileRowProps> {
  props: TileRowProps;

  renderLetter(letter) {
    return (
      <Tile letter={letter} chosen={false} />
      )
  };

  render() {
    const content = this.props.content;
    return (
      <p>
        {content.map(letter => this.renderLetter(letter))}
      </p>
    )
  }
}

export default TileRow;
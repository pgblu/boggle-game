import React, { Component } from 'react';

import AppState from './AppState.js';

import './styles/Tile.css';

type TileProps = {
  chosen: boolean,
  letter: string
}

class Tile extends Component<TileProps> {
  props: TileProps;

  render() {
    const {props} = this;
    return <button className={props.chosen ? 'chosen' : 'available'}>{props.letter}</button>
  }
}

export default Tile;
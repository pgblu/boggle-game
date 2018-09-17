import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './styles/SizeSelector.css';
import AppState from './AppState.js';

type SizeSelectorProps = {
  sizes: Array<number>
};

@observer
class SizeSelector extends Component<SizeSelectorProps> {
  props: SizeSelectorProps;

  renderOption(size) {
    return <button onClick={() => AppState.setGridWidth(size)} className="size-option" key={size} id={size}>{size}x{size}</button>
  }
  render() {
    return (
      this.props.sizes.map(size => this.renderOption(size))
    );
  }
}

export default SizeSelector;
import React, { Component } from 'react';
import './styles/SizeSelector.css';

type SizeSelectorProps = {
  sizes: Array<number>
};

class SizeSelector extends Component<SizeSelectorProps> {
  props: SizeSelectorProps;

  renderOption(size) {
    return <span>{size}</span>
  }
  render() {
    return (
      this.props.sizes.map(size => this.renderOption(size))
    );
  }
}

export default SizeSelector;
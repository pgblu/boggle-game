// @flow

import React, { Component } from 'react';
import {observer} from 'mobx-react';
import AppState from './AppState.js';

import './styles/InputForm.css';

@observer
class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  };

  handleSubmit = (event) => {
    AppState.foundWords.push(event.target.value);
    this.setState({value: ''});
  };

  render() {
    return (
      <form className="input-area" onSubmit={this.handleSubmit}>
        <input className="input-field" type="text" value={this.state.value} onChange={this.handleChange} />
        <input className="input-submit" type="submit" value="Submit" onClick={this.handleInput} />
      </form>
    )
  }
}

export default InputForm;
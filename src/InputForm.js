// @flow

import React, { Component } from 'react';
import {observer} from 'mobx-react';
import AppState from './AppState.js';

import './styles/InputForm.css';

@observer
class InputForm extends Component {

  handleInput = (event) => {
    AppState.foundWords.push(event.target.value)
  }

  render() {
    return (
      <div className="input-area">
        <input className="input-field" type="text" name="entry" onSubmit={this.handleInput} />
        <button className="input-submit" onClick={this.handleInput} />
      </div>
    )
  }
}

export default InputForm;
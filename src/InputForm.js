// @flow

import React, { Component } from 'react';
import {observer} from 'mobx-react';
import AppState from './AppState.js';

@observer
class InputForm extends Component {

  handleInput = (event) => {
    console.log(event);
    if (true) {
      AppState.foundWords.push(event.target.value)
    }
  }

  render() {
    return (
      <form>
        <input className="input-field" type="text" name="entry" onSubmit={this.handleInput} />
        <input className="input-submit" type="submit" value="Submit" />
      </form>
    )
  }
}

export default InputForm;
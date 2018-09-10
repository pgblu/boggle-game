// @flow

import React, { Component } from 'react';
import {observer} from 'mobx-react';

import AppState from './AppState.js';

@observer
class WordList extends Component {
  found_words: Array<string> = AppState.found_words;

  renderWord(word) {
    return (
      <li>{word}</li>
    )
  }
  render() {
    return (
      <ul>
        {this.found_words.map(word => this.renderWord(word))}
      </ul>)
  }
}

export default WordList;
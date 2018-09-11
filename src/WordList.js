// @flow

import React, { Component } from 'react';
import {observer} from 'mobx-react';

import './styles/WordList.css';

import AppState from './AppState.js';

@observer
class WordList extends Component {
  found_words: Array<string> = AppState.found_words;

  renderWord(word) {
    return (
      <div>{word}</div>
    )
  }
  render() {
    return (
      <div className="word-list">
        {this.found_words.map(word => this.renderWord(word))}
      </div>)
  }
}

export default WordList;
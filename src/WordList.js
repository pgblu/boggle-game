// @flow

import React, { Component } from 'react';
import {observer} from 'mobx-react';

import './styles/WordList.css';

import AppState from './AppState.js';

@observer
class WordList extends Component {
  foundWords: Array<string> = AppState.foundWords;

  renderWord(word) {
    return (
      <div className="found-word">{word}</div>
    )
  }
  render() {
    return (
      <div className="word-list">
        {this.foundWords.map(word => this.renderWord(word))}
      </div>)
  }
}

export default WordList;
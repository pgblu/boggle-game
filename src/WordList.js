// @flow

import React, { Component } from 'react';
import {observer} from 'mobx-react';

import './styles/WordList.css';

import AppState from './AppState.js';

@observer
class WordList extends Component {
  foundWords: Array<string> = AppState.foundWords;

  renderWord(word, index) {
    return (
      <div className="found-word" id={index} key={index}>{word}</div>
    )
  }
  render() {
    return (
      <div className="word-list">
        {this.foundWords.map((word, index) => this.renderWord(word, index))}
      </div>)
  }
}

export default WordList;
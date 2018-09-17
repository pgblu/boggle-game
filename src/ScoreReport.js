import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './styles/ScoreReport.css';
import AppState from './AppState.js';

@observer
export default class ScoreReport extends Component {
  render() {
    return (
      <div className='scoreReport'>{AppState.score}</div>
    )
  }
}
import React from 'react';
import './styles/ScoreReport.css';
import AppState from './AppState.js';

export default function ScoreReport() {
  return (
    <div className='scoreReport'>{AppState.score}</div>
  )
}
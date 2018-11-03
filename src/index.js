import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import AppState from './AppState';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App tileRows={6} />, document.getElementById('root'));
registerServiceWorker();
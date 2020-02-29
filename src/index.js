import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router-dom';
import history from './config/history';

const initialComponent = (
  <Router history={history}>
    <App />
  </Router>
);

ReactDOM.render(initialComponent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

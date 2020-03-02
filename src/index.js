import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router-dom';
import history from './config/history';
import {Provider as ReduxProvider} from 'react-redux';
import {ThemeProvider} from './themes/ThemeContext';
import store from './redux/store';
import ErrorBoundary from 'react-error-boundary';
import AppError from './components/ErrorPages/AppError/AppError';
import './config/icons';
import './lang/i18n';

const initialComponent = (
  <ReduxProvider store={store}>
    <Router history={history}>
      <ThemeProvider>
        <ErrorBoundary FallbackComponent={AppError}>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </Router>
  </ReduxProvider>
);

ReactDOM.render(initialComponent, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

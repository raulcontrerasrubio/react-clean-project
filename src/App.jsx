import React, {useState, useEffect} from 'react';
import './App.scss';
import {Navigation} from './config/Navigation';
import {useSelector, useDispatch} from 'react-redux';
import {appLoader} from './modules/app/index';
import {appHasLoaded} from './redux/app/app.actions';
import AppLoadingPage from './components/LoadingPages/AppLoadingPage/AppLoadingPage';
import AppError from './components/ErrorPages/AppError/AppError';

const App = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.app);
  const [appError, setAppError] = useState(false);

  useEffect(() => {
    if (!reduxState.appHasLoaded) {
      appLoader()
        .then(() => {
          dispatch(appHasLoaded());
        })
        .catch(() => {
          setAppError(true);
        });
    }
  }, [dispatch, reduxState.appHasLoaded]);

  if (appError) {
    return <AppError />;
  }

  if (!reduxState.appHasLoaded) {
    return <AppLoadingPage />;
  }

  return <Navigation />;
};

export default App;

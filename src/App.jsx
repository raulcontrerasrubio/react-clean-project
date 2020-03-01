import React, {useState, useEffect} from 'react';
import './App.scss';
import {Navigation} from './config/Navigation';
import {useSelector, useDispatch} from 'react-redux';
import {appLoader} from './modules/app/index';
import {appHasLoaded} from './redux/app/app.actions';
import AppLoadingPage from './components/LoadingPages/AppLoadingPage/AppLoadingPage';
import AppError from './components/ErrorPages/AppError/AppError';
import PageLoad from './components/Animations/PageLoad/PageLoad';
import {MIN_SPLASH_SCREEN_TIME} from './config/config';

const App = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.app);
  const [appError, setAppError] = useState(false);

  useEffect(() => {
    if (!reduxState.appHasLoaded) {
      const appOptions = {
        splashScreenTime: MIN_SPLASH_SCREEN_TIME,
      };
      appLoader(appOptions)
        .catch(() => {
          setAppError(true);
        })
        .finally(() => {
          dispatch(appHasLoaded());
        });
    }
  }, [dispatch, reduxState.appHasLoaded]);

  return (
    <PageLoad
      isLoading={!reduxState.appHasLoaded}
      hasError={appError}
      onLoadComponent={<AppLoadingPage />}
      onSuccessComponent={<Navigation />}
      onErrorComponent={<AppError />}
    />
  );
};

export default App;

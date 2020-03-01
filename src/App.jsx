import React, {useState, useEffect} from 'react';
import './App.scss';
import {Navigation} from './config/Navigation';
import {useSelector, useDispatch} from 'react-redux';
import {appLoader} from './modules/app/index';
import {appHasLoaded} from './redux/app/app.actions';
import AppLoadingPage from './components/LoadingPages/AppLoadingPage/AppLoadingPage';
import AppError from './components/ErrorPages/AppError/AppError';
import PageLoad from './components/Animations/PageLoad/PageLoad';

const App = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.app);
  const [appError, setAppError] = useState(false);

  useEffect(() => {
    if (!reduxState.appHasLoaded) {
      appLoader()
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

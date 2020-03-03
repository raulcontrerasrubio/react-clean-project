import React, {useState, useEffect, useContext, useMemo} from 'react';
import {Navigation} from './config/Navigation';
import {useSelector, useDispatch} from 'react-redux';
import {appLoader} from './modules/app/index';
import {appHasLoaded} from './redux/app/app.actions';
import AppLoadingPage from './components/LoadingPages/AppLoadingPage/AppLoadingPage';
import AppError from './components/ErrorPages/AppError/AppError';
import PageLoad from './components/Animations/PageLoad/PageLoad';
import {MIN_SPLASH_SCREEN_TIME} from './config/config';
import {ThemeContext} from './themes/ThemeContext';
import AppStyles from './App.styles';
import FadeInOut from './components/Animations/FadeInOut/FadeInOut';
import useResizing from './hooks/useResizing';
import ResizingPage from './components/LoadingPages/ResizingPage/ResizingPage';

const RESIZING_REFRESH_TIME = +process.env.REACT_APP_RESIZE_REFRESH_TIME || 750;

const App = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(state => state.app);
  const {theme} = useContext(ThemeContext);
  const [appError, setAppError] = useState(false);
  const resizing = useResizing(RESIZING_REFRESH_TIME);

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

  const onSuccess = useMemo(
    () => (
      <>
        <FadeInOut activate={resizing}>
          <ResizingPage theme={theme} />
        </FadeInOut>
        <Navigation />
      </>
    ),
    [resizing, theme]
  );

  return (
    <AppStyles theme={theme}>
      <PageLoad
        isLoading={!reduxState.appHasLoaded}
        hasError={appError}
        onLoadComponent={<AppLoadingPage theme={theme} />}
        onSuccessComponent={onSuccess}
        onErrorComponent={<AppError theme={theme} />}
      />
    </AppStyles>
  );
};

export default App;

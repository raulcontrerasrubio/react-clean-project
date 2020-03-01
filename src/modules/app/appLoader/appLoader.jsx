import {MIN_SPLASH_SCREEN_TIME} from '../../../config/config';

const appLoader = () => {
  const minSplashTime = new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, MIN_SPLASH_SCREEN_TIME);
  });

  return Promise.all([minSplashTime]);
};

export default appLoader;

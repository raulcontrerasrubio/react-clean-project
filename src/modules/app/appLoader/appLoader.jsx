const appLoader = options => {
  let {splashScreenTime} = options;
  splashScreenTime = splashScreenTime || 0;

  const minSplashTime = splashScreenTime
    ? new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, splashScreenTime);
      })
    : Promise.resolve();

  return Promise.all([minSplashTime]);
};

export default appLoader;

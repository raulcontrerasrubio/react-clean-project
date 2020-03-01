const appLoader = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        return reject();
      }
      return resolve();
    }, 2 * 1000);
  });
};

export default appLoader;

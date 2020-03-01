const appLoader = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (false) {
        return reject();
      }
      return resolve();
    }, 5 * 1000);
  });
};

export default appLoader;

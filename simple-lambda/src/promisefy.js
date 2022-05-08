module.exports = {
  promisefy(fn, args = []) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fn(...args));
      }, 2000);
    });
  },
};

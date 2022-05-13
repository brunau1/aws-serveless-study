module.exports = {
  promisefy: function (fn, exp) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fn());
      }, exp);
    });
  },
};

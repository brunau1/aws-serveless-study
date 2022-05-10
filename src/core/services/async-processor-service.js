class AsyncProcessorService {
  static promisefy(time, fn, args = []) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fn(...args));
      }, time);
    });
  }
}

module.exports = {
  AsyncProcessorService,
};

const { promisefy } = require("./promisefy");

function powJob(event) {
  const [input, power] = event.args;
  return Math.pow(input, power);
}

module.exports = {
  async powLambda(input, power) {
    return await promisefy(powJob, [
      {
        args: [input, power],
      },
    ]);
  },
};

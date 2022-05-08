const { promisefy } = require("./promisefy");

function powJob(event) {
  const [input, power] = event.args;
  return Math.pow(input, power);
}

async function sendNotificationJob(event) {
  const [to, message] = event.args;
  console.log(`Sending email to: ${to}, message: ${message}`);
  await promisefy(() => null, []);
  console.log(`Email sent!`);
}

module.exports = {
  async powLambda(input, power) {
    return await promisefy(powJob, [
      {
        args: [input, power],
      },
    ]);
  },
  async sendNotificationLambda(to, message) {
    return await sendNotificationJob({
      args: [to, message],
    });
  },
};

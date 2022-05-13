const { promisefy } = require("../services/promisefy");

async function sendEmails(messages) {
  return promisefy(() => {
    for (let message of messages) {
      console.log("Email service | Enviando email:", message);
    }
  }, 500);
}

module.exports = {
  sendEmails,
};

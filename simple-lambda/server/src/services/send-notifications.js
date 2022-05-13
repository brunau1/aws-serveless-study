const { promisefy } = require("./promisefy");
const faker = require("@faker-js/faker");
const { connect } = require("../database/database");
const { sendEmails } = require("../application/email-sender");

async function sendNotifications() {
  console.log("Service | Iniciando service de notificações...");
  return promisefy(async () => {
    console.log("Service | Buscando notificações pendentes...");
    const pendingNotifications = await getPendingNotifications();
    console.log("Service | Enviando notificações pendentes...");
    await sendEmails(pendingNotifications);
    console.log("Service | Notificações enviadas com sucesso!");
    console.log("Service | Finalizando service de notificações...\n");
  }, 1500);
}

async function getPendingNotifications() {
  await connect();
  return promisefy(() => {
    return [
      {
        message: faker.default.random.words(4),
      },
      {
        message: faker.default.random.words(4),
      },
    ];
  }, 2000);
}

module.exports = {
  name: "send-notifications",
  action: sendNotifications,
};

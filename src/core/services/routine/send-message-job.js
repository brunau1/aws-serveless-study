const {
  MessageRepository,
} = require("../../../infraestructure/database/repositories/message-repository");
const { Job } = require("../../models/job");
const { AsyncProcessorService } = require("../async-processor-service");

async function sendMessageJob() {
  console.log("JOB | Iniciando job de envio de mensagens");
  await sendMessages();
  console.log("JOB | Job de envio de mensagens finalizado\n");
}

async function sendMessages() {
  const messageRepository = new MessageRepository();
  console.log("JOB | Buscando mensagens pendentes");
  const messages = await messageRepository.getPendingMessages();
  for (const message of messages) {
    await AsyncProcessorService.promisefy(
      2000,
      () => {
        console.log("JOB | Enviando mensagem: ", message.text);
      },
      []
    );
  }
}

module.exports = {
  SendMessageJob: new Job(5000, "SEND_MESSAGE_JOB", sendMessageJob, []),
};

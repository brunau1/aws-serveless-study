const { AsyncProcessorService } = require("./async-processor-service");

class EmailSenderService {
  static sendEmail = (message) =>
    AsyncProcessorService.promisefy(
      2000,
      () => {
        console.log("Email sender | Enviando mensagem: ", message);
      },
      []
    );
}

module.exports = {
  EmailSenderService,
};

const {
  AwsLambdaService,
} = require("../../infraestructure/aws-serverless/services/aws-lambda-service");
const {
  SendMessageJob,
} = require("../../core/services/routine/send-message-job");

class LambdaService {
  static manager = new AwsLambdaService();
  static jobs = [SendMessageJob];

  static async start() {
    console.log("----- Iniciando serviço Lambda -----");
    for (const job of LambdaService.jobs) {
      LambdaService.manager.addJob(job);
      LambdaService.manager.runJob(job.name);
    }
  }
}

module.exports = {
  LambdaService,
};

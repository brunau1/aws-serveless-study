const { powLambda, sendNotificationLambda } = require("./src/lambdaJobs");

// Simple lambda job example

//TODO: Add a loop to run the job multiple times
//TODO: Add another job case example

execJob = async (job, args) => {
  console.log(`Starting job with inputs: ${args}\n`);
  const res = await job(...args);
  console.log(`\nJob finished with result: ${res}`);
};

//execJob(powLambda, [3, 2]);

execJob(sendNotificationLambda, [
  "Carlos Gomes",
  "Olá, essa é uma mensagem de teste",
]);

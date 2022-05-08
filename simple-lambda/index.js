const { powLambda } = require("./src/lambdaJobs");

// Simple lambda job example

execJob = async (job, args) => {
  console.log(`Starting job with inputs: ${args}`);
  const res = await job(...args);
  console.log(`Job finished with result: ${res}`);
};

execJob(powLambda, [3, 2]);

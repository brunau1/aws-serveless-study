class AwsLambdaService {
  constructor() {
    this.jobs = {};
  }
  addJob(job) {
    console.log(`LambdaService | Adding job ${job.name}`);
    this.jobs[job.name] = job;
  }
  runJob(name) {
    console.log(`LambdaService | Running job ${name}`);
    const job = this.jobs[name];
    setInterval(async () => {
      await job.run(job.args);
    }, job.interval);
  }
}

module.exports = {
  AwsLambdaService,
};

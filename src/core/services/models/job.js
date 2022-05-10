class Job {
  constructor(interval, name, handler, args) {
    this.name = name;
    this.args = args;
    this.handler = handler;
    this.interval = interval;
  }
  async run() {
    await this.handler(...this.args);
  }
}

module.exports = {
  Job,
};

class Database {
  constructor() {
    this.config = {};
  }
  connect() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("DB | Connected to database");
        resolve(this.config);
      }, 1000);
    });
  }
}
module.exports = {
  Database,
};

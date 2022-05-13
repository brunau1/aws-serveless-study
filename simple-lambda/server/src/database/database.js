const { promisefy } = require("../services/promisefy");

function connect() {
  promisefy(() => {
    console.log("Database | Connected to database");
  }, 1500);
}

module.exports = {
  connect,
};

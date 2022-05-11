const { Message } = require("../../../core/models/message");
const { Database } = require("../database");
const faker = require("@faker-js/faker");
class MessageRepository {
  constructor() {
    this.db = new Database();
  }
  async getPendingMessages() {
    await this.db.connect();
    const messages = [
      new Message(faker.default.random.words(6)),
      new Message(faker.default.random.words(6)),
    ];
    return messages;
  }
}

module.exports = {
  MessageRepository,
};

const { Message } = require("../../../core/models/message");
const { Database } = require("../database");

class MessageRepository {
  constructor() {
    this.db = new Database();
  }
  async getPendingMessages() {
    await this.db.connect();
    const messages = [
      new Message("Cobrança de conta atrasada"),
      new Message("Juros reduzino no cartão crédito"),
    ];
    return messages;
  }
}

module.exports = {
  MessageRepository,
};

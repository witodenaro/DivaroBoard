const BaseDatabase = require('../base/base');

const ticketProperties = ['title', 'assignee', 'description', 'statusType'];

class TicketDatabase extends BaseDatabase {
  validateTicket(ticket) {
    ticketProperties.forEach((property) => {
      if (!ticket.hasOwnProperty(property)) {
        throw new Error(
          'Ticket must have the following properties: ' +
            ticketProperties.join(', ')
        );
      }
    });
  }

  insertOne(ticket) {
    this.validateTicket(ticket);

    return super.insertOne(ticket);
  }

  updateOne(id, ticket) {
    this.validateTicket(ticket);

    return super.updateOne(id, ticket);
  }
}

module.exports = new TicketDatabase('tickets');

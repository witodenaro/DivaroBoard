const ticketsDB = require('../db/tickets/tickets');

class TicketController {
  getTickets(req, res, next) {
    try {
      const tickets = ticketsDB.find();

      res.json(tickets);
    } catch (error) {
      next(error);
    }
  }

  updateTicket(req, res, next) {
    const { id } = req.params;
    const { title, description, assignee, statusType } = req.body;

    const ticket = {
      title,
      description,
      assignee,
      statusType,
    };

    try {
      const updatedTicket = ticketsDB.updateOne(id, ticket);

      res.json(updatedTicket);
    } catch (error) {
      next(error);
    }
  }

  createTicket(req, res, next) {
    const { title, description, assignee, statusType } = req.body;

    const ticket = {
      title,
      description,
      assignee,
      statusType,
      publishDate: new Date(),
    };

    try {
      const createdTicket = ticketsDB.insertOne(ticket);

      res.json(createdTicket);
    } catch (error) {
      next(error);
    }
  }

  deleteTicket(req, res, next) {
    const { id } = req.params;

    try {
      ticketsDB.deleteById(id);

      res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TicketController();

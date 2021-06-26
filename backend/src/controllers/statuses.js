const statusesDB = require('../db/statuses/statuses');
const ticketsDB = require('../db/tickets/tickets');

class StatusesController {
  getStatuses(req, res, next) {
    try {
      const statuses = statusesDB.find();

      res.json(statuses);
    } catch (error) {
      next(error);
    }
  }

  createStatus(req, res, next) {
    const { color, title, type } = req.body;

    const status = {
      color,
      title,
      type,
    };

    try {
      const createdStatus = statusesDB.insertOne(status);

      res.json(createdStatus);
    } catch (error) {
      next(error);
    }
  }

  deleteStatus(req, res, next) {
    const { id } = req.params;

    try {
      const status = statusesDB.deleteById(id);

      if (status) {
        const { type } = status;

        ticketsDB.updateMany(
          {
            statusType: type,
          },
          {
            statusType: 'open',
          }
        );

        res.json(status);
      }

      res.status(400).send();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new StatusesController();

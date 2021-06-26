const router = require('express').Router();

const ticketController = require('../controllers/ticket');

router.get('/', ticketController.getTickets);

router.put('/:id', ticketController.updateTicket);

router.post('/', ticketController.createTicket);

router.delete('/:id', ticketController.deleteTicket);

module.exports = router;

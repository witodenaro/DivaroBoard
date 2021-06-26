const router = require('express').Router();

const statusesController = require('../controllers/statuses');

router.get('/', statusesController.getStatuses);

router.post('/', statusesController.createStatus);

router.delete('/:id', statusesController.deleteStatus);

module.exports = router;

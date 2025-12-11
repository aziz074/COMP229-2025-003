var express = require('express');
var router = express.Router();

var inventoryController = require('../controllers/inventory');
const requireAuth = require('../middleware/firebaseAuth');

// PUBLIC ROUTES
router.get('/', inventoryController.list);
router.get('/:id', inventoryController.read);

// PROTECTED ROUTES
router.post('/', requireAuth, inventoryController.create);
router.put('/:id', requireAuth, inventoryController.update);
router.delete('/:id', requireAuth, inventoryController.remove);

module.exports = router;

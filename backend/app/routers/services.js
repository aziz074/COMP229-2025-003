var express = require('express');
var router = express.Router();

var serviceController = require('../controllers/services');
const requireAuth = require('../middleware/firebaseAuth');

// PUBLIC ROUTES
router.get('/', serviceController.list);
router.get('/:id', serviceController.read);

// PROTECTED ROUTES
router.post('/', requireAuth, serviceController.create);
router.put('/:id', requireAuth, serviceController.update);
router.delete('/:id', requireAuth, serviceController.remove);

module.exports = router;

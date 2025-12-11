var express = require('express');
var router = express.Router();

var userController = require('../controllers/users');
const requireAuth = require('../middleware/firebaseAuth');

// PUBLIC ROUTES
router.get('/', userController.list);
router.post('/', userController.create);

router.param('id', userController.userByID);

// PROTECTED ROUTES (require Firebase token)
router.get('/:id', requireAuth, userController.read);
router.put('/:id', requireAuth, userController.update);
router.delete('/:id', requireAuth, userController.delete);

// OPTIONAL – Set admin
router.put('/setadmin/:userID', requireAuth, userController.setAdmin);

module.exports = router;

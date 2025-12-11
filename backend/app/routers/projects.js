const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projects');
const requireAuth = require('../middleware/firebaseAuth');

// PUBLIC ROUTES
router.get('/', projectController.list);
router.get('/:id', projectController.read);

// PROTECTED ROUTES (Firebase Auth)
router.post('/', requireAuth, projectController.create);
router.put('/:id', requireAuth, projectController.update);
router.delete('/:id', requireAuth, projectController.remove);

module.exports = router;

// http://localhost:3000/comments

// Import express
const express = require('express');
// Create router
const router = express.Router();

// Import controller
const commentsController = require('../controllers/commentsController');

// Create routes
router.get('/', commentsController.index);

// Export router
module.exports = router;
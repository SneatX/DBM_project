const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController.js');

router.get("/boards", dashboardController.getBoards)

module.exports = router;
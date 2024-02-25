const express = require('express');
const router = express.Router();

const barPlotController = require('../controllers/graphController');

router.get('/barPlot',barPlotController.barplot);

module.exports = router;
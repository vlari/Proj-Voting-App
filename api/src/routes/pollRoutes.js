const express = require('express');
const pollController = require('../controllers/pollControllers');

const router = express.Router();

router.route('/poll').post(pollController.addPoll);


module.exports = router;

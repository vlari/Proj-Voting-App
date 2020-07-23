const express = require('express');
const candidateController = require('../controllers/candidateControllers');

const router = express.Router();

router.route('/candidates').get(candidateController.getCandidates);
router.route('/candidates/ballot').get(candidateController.getBallot);
router.route('/candidates/:id').get(candidateController.getCandidate);

module.exports = router;

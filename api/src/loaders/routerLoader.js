const express = require('express');
const candidateRoutes = require('../routes/candidateRoutes');
const pollRoutes = require('../routes/pollRoutes');

const router = express.Router();

router.use('/v1', candidateRoutes);
router.use('/v1', pollRoutes);

module.exports = router;

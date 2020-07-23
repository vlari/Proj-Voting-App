const Candidate = require('../db/models/candidate');
const Voter = require('../db/models/voter');
// const errorHandler = require('../../utils/errorHandler');

exports.addPoll = async (req, res, next) => {

  try {

    if (!req.body.voterId && !req.body.candidateId) {
      res.status(400).json({ data: 'Invalid id provided' });
    }

    const candidate = await Candidate.findByPk(req.body.candidateId);

    // if (!candidate) {
    //   return next(new errorHandler('Candidate not found', 404));
    // }

    const voter = await Voter.findByPk(req.body.voterId);

    candidate.addVoter(voter);

    res.status(201).json({ data: 'Poll successful' });
  } catch (error) {
    next(error);
  }

};

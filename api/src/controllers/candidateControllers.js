const Candidate = require('../db/models/candidate');
const Party = require('../db/models/party');
const errorHandler = require('../../utils/errorHandler');

exports.getCandidates = async (req, res, next) => {

  try {
    const candidates = await Candidate.findAll({
      order: [
        ['name']
      ],
      include: Party
    });

    res.status(200).json({ data: candidates, count: candidates.length });
  } catch (error) {
    next(new errorHandler.ErrorHandler('Error while trying to fetch candidates', 500));
  }
};

exports.getBallot = async (req, res, next) => {

  try {
    const candidates = await Candidate.findAll({
      where: {
        isActive: true
      },
      order: [
        ['name']
      ],
      include: Party
    });

    res.status(200).json({ data: candidates, count: candidates.length });
  } catch (error) {
    next(error);
  }
};

exports.getCandidate = async (req, res, next) => {

  try {
    const candidate = await Candidate.findByPk(req.params.id);

    if (!candidate) {
      next(new errorHandler.ErrorHandler('Candidate not found', 404));
    }

    res.status(200).json({ data: candidate });
  } catch (error) {
    next(error);
  }
};

const chalk = require('chalk');
const Voter = require('../models/voter');
const State = require('../models/state');
const Candidate = require('../models/candidate');
const Party = require('../models/party');

const states = require('./data/states.json');
const voters = require('./data/voters.json');
const candidates = require('./data/candidates.json');
const parties = require('./data/parties.json');

const seedDatabase = async () => {
  
  try {
    // Insert states
    const registeredStates = await State.bulkCreate(states);

    // Insert parties
    const candidateParties = await Party.bulkCreate(parties);
    
    // Insert voters
    voters.forEach( voter => {
      voter.StateId = Math.floor(Math.random() * registeredStates.length) + 1;
    });
    await Voter.bulkCreate(voters);

    // Insert candidates
    candidates.forEach( (candidate, index) => {
      candidate.StateId = Math.floor(Math.random() * registeredStates.length) + 1;
      candidate.isActive = index % 2 === 0 && true;
      const party = candidateParties.pop();
      candidate.PartyId = party.id;
    });
    await Candidate.bulkCreate(candidates);
    
    console.log(chalk.yellow.inverse('Database has been seeded'));
  } catch (error) {
    console.log(chalk.red.inverse('Error seeding the database', error));
  }
};  

module.exports = seedDatabase;

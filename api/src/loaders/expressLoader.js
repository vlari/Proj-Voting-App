const express = require('express');
const env = require('../config/env');
const morgan = require('morgan');
const chalk = require('chalk');
const errorHandler = require('../../utils/errorHandler');
const router = require('../loaders/routerLoader');

const sequelize = require('./dbLoader');
const seedDatabase = require('../db/seeders/seed');
const Voter = require('../db/models/voter');
const State = require('../db/models/state');
const Candidate = require('../db/models/candidate');
const Party = require('../db/models/party');

const loadExpress = async () => {
  const app = express();

  app.use(express.json());
  
  if (env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  try {
    await sequelize.authenticate();
    console.log(chalk.yellow.inverse('Database connection successful.'));
    
    // Database associations
    Voter.belongsTo(State);
    State.hasMany(Voter);
    
    Candidate.belongsTo(State);
    State.hasMany(Candidate);

    Candidate.belongsTo(Party);
    Party.hasMany(Candidate);

    Voter.belongsToMany(Candidate, { through: 'Poll' });
    Candidate.belongsToMany(Voter, { through: 'Poll' });
    
    await sequelize.sync({ force: true });

    seedDatabase();
    
    app.use('/api', router);

    app.use((err, req, res, next) => {
      errorHandler.handleError(err, res);
    });

    const port = env.PORT;
    app.listen(port, () => {
      console.log(chalk.green(`Server running in ${env.NODE_ENV} environment.`));
      console.log(chalk.blue.inverse(`Server running on port ${port}.`));
    });
  } catch (error) {
    console.log(chalk.red.inverse('Database connection failed'));
  }
};

module.exports = loadExpress;

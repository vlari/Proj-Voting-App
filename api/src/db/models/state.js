const { DataTypes } = require('sequelize');
const sequelize = require('../../loaders/dbLoader');

const State = sequelize.define('State', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  population: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  pollingCenters: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  flag: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = State;

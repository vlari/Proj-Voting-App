const { DataTypes } = require('sequelize');
const sequelize = require('../../loaders/dbLoader');

const Party = sequelize.define('Party', {
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
  members: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  flag: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Party;

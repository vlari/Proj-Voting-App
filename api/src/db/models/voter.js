const { DataTypes } = require('sequelize');
const sequelize = require('../../loaders/dbLoader');

const Voter = sequelize.define('Voter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  citizenId: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING(11),
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING(6),
    allowNull: false
  }
});

module.exports = Voter;

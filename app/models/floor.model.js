const Sequelize = require('sequelize');
const sequelize = require('../../config/db');

const tableName = 'floors';

const Floor = sequelize.define('Floor', {
  floorNumber: {
    type: Sequelize.STRING,
  },
  wardenRequired: {
    type: Sequelize.BOOLEAN,
  },
  peepsRequired: {
    type: Sequelize.BOOLEAN,
  },
  floorManagerName: {
    type: Sequelize.STRING,
  },
  managerPhone: {
    type: Sequelize.STRING,
  },
  managerEmail: {
    type: Sequelize.STRING,
  },
}, { tableName });

module.exports = { Floor };

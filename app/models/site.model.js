const Sequelize = require('sequelize');
const sequelize = require('../../config/db');
const { Floor } = require('./floor.model');

const tableName = 'sites';

const Site = sequelize.define('Site', {
  siteName: {
    type: Sequelize.STRING,
  },
  openingHours: {
    type: Sequelize.STRING,
  },
  securityContact: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  streetAddress: {
    type: Sequelize.STRING,
  },
  zipCode: {
    type: Sequelize.STRING,
  },
    state: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  suburb: {
    type: Sequelize.STRING,
  },
  totalEmployees: {
    type: Sequelize.STRING,
  },
}, { tableName });


module.exports = { Site };
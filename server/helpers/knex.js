const environment = process.env.NODE_ENV || 'development';
const configuration = require('../knexfile');
module.exports = require('knex')(configuration);

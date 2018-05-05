// If we are not on a production server load the .env file
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

// Do not put your database credentials directly in this
// file as it will be visible on github!
// Check the readme-file for details.
module.exports = {
  client: 'mysql',
  connection: {
    database: process.env.DB_NAME,
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};

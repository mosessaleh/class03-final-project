// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'hyf_dev',
      user:     'test',
      password: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

 staging: {
    client: 'mysql',
    connection: {
      database: 'hyf_staging',
      user:     'test',
      password: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'hyf',
      user:     'test',
      password: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

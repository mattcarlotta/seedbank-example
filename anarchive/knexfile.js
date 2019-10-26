require('dotenv').config({path: '../.env'});
const env = process.env;

module.exports = {
  client: 'mysql',
  connection: {
    host: env.DB_HOST,
    database: env.DB_NAME,
    user:     env.DB_USER,
    password: env.DB_PASSWORD,
    port: env.DB_PORT
  },
  pool: {
    min: 0,
    max: 50
  },
  migrations: {
    directory: './db/migrations',
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './db/seeds'
  }
};

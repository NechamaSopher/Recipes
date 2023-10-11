require('../config/.env');
const { knexSnakeCaseMappers } = require('objection');

const DB_URL = process.env.DB_URL;

const knexConfig = {
  client: 'postgresql',
  connection: DB_URL,
  pool: {
    min: 2,
    max: 10
  },
  ...knexSnakeCaseMappers(),
  migrations: {
    directory: '../db/migrations'
  }
};

module.exports = knexConfig;

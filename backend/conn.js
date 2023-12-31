const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'admin',
  port: 5432,
  database: 'healthiio',
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

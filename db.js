const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  database: 'todo_db',
  host: 'localhost',
  port: 5432,
});

module.exports = pool;

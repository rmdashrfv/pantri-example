const pgp = require("pg-promise")();

const db = pgp({
  connectionString: process.env.PANTRI_DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});



module.exports = db;

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("giveaway.sqlite");

db.run(`
  CREATE TABLE IF NOT EXISTS entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    prize TEXT NOT NULL,
    contactMethod TEXT NOT NULL,
    agree INTEGER NOT NULL,
    createdAt TEXT NOT NULL
  );
`);

module.exports = db;

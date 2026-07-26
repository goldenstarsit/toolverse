import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./src/database/toolverse.db");

db.all("SELECT * FROM tools", [], (error, rows) => {
  if (error) {
    console.error(error);
    process.exit(1);
  }

  console.log(JSON.stringify(rows, null, 2));
  db.close();
});

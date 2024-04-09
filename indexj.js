const express = require("express");
const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "database.db");
let db = null;
const conntDbtoServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

conntDbtoServer();

app.get("/products", async (request, response) => {
  let sqldata = `select * from products`;

  const de = await db.all(sqldata);
  response.send(de);
});

app.get("/sale", async (request, response) => {
  let sqldata = `select * from sale`;

  const de = await db.all(sqldata);
  response.send(de);
});

app.get("/revenue", async (request, response) => {
  let sqldata = `select * from revmtb`;

  const de = await db.all(sqldata);
  response.send(de);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(port));

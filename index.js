const express = require("express");
const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const cors = require("cors");

app.use(cors());

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

app.get("/sale/:id/", async (request, response) => {
  let { id } = request.params;

  let sqldata = `select * from sale where id = ${id} `;

  const de = await db.get(sqldata);
  response.send(de);
});

app.get("/web_sale/:web_sales/", async (request, response) => {
  let { web_sales } = request.params;

  let sqldata = `select * from sale where web_sales > ${web_sales}`;

  const de = await db.all(sqldata);
  response.send(de);
  console.log(web_sales);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(port));

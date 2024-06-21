const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Pool, Client } = require("pg");
const port = 5000;

app.use(express.static(__dirname));

app.get("/register-form", (req, res) => {
  res.sendFile(__dirname + "/Main.html");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/submit", function (req, res) {
  console.log("Data Saved!");
});

const connectionString = "postgresql://postgres:adriane123q@localhost:5432/mydata";

const client = new Client({
  connectionString: connectionString,
});
client.connect();

app.post("/register-form", (req, res) => {
  const {studentno, passwords } = req.body;

  client.query(
    "INSERT INTO mybase(studentno, passwords) values ($1, $2)",
    [studentno, passwords,],
    (err, res) => {
      console.log(err, res);
    }
  );
  res.sendFile(__dirname + "/Main.html");
});

app.post("/login", (req, res) => {
  const { studentnu, pass } = req.body;
  client.query(
    "SELECT * FROM mybase WHERE studentno = $1 AND passwords = $2",
    [studentnu, pass],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Error logging in");
      } else {
        if (result.rows.length === 1) {
          res.redirect("/Logged.html");
        } else {
          res.status(401).send("Invalid Student Number or password");
        }
      }
    }
  );
});

app.listen(port, () => {
  console.log(`port running on ${port}!`);
});
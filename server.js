require("dotenv").config();
const express = require("express");
const apiMain = require("./api/main");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

// API routing
app.use("/", apiMain);

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

app.listen(3001, () => {
  console.log("The server is running on port 3001");
});

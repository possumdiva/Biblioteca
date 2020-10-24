require("dotenv").config();
const express = require("express");
const router = express.Router();
const apiMain = require("./api/main");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const app = express();
const fetch = require("node-fetch");

const apiHeatherbeat = require("./api/apiHeatherbeat");
app.use("/api/Heatherbeat", apiHeatherbeat);
const auth = require("./auth");
const apiBooks = require("./api/apiBooks");

app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

app.use("/auth/github", auth);
apiBooks(app, fetch);
// API routing
// app.use("/", apiMain);

app.listen(3001, () => {
  console.log("The server is running on port 3001");
});

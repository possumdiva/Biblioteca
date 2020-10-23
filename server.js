const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/css", express.static(__dirname + "/css"));

app.get("/heartbeat", (req, res) => {
  res.json({
    is: "working",
  });
});

app.listen(3001, () => {
  console.log("The server is running on port 3001");
});

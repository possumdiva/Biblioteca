const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("help");
  res.json({
    is: "working",
  });
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    is: "working",
  });
});

module.exports = router;

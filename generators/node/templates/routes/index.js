var express = require("express");
var router = express.Router();

router.get("/", async function (req, res) {
  res.json({ status: "<%= name %> works" });
});

module.exports = router;

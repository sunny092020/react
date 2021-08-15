const router = require("express").Router();
const fs = require('fs');

router.post("/add", async (req, res) => {
  try {
    username = req.body.username;
    res.status(200).json();
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;

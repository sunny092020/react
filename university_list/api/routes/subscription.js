const router = require("express").Router();
const fs = require("fs");

router.post("/subscribe", async (req, res) => {
  try {
    const email = req.body.email;

    const rawdata = fs.readFileSync("subscriptions.json");
    const subscriptions = JSON.parse(rawdata);
    if (!subscriptions.includes(email)) {
      subscriptions.push(email);
    }
    fs.writeFileSync("subscriptions.json", JSON.stringify(subscriptions));
    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

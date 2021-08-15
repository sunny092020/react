const router = require("express").Router();
const fs = require('fs');

router.post("/toggle", async (req, res) => {
  try {
    username = req.body.username;
    favourite = req.body.favourite;
    university = req.body.university;

    let rawdata = fs.readFileSync('users.json');
    let users = JSON.parse(rawdata);

    let favourites = users[username].favourites;
    console.table(favourites);
    console.log(`favourite ${favourite}`);

    if (favourite) {
      if (!favourites.includes(university)) {
        favourites.push(university);
      }
    } else {
      favourites = favourites.filter(u => u !== university);
    }

    users[username].favourites = favourites

    console.table(users);

    fs.writeFileSync('users.json', JSON.stringify(users));

    res.status(200).json();
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get("/:username", async (req, res) => {
  try {
    let rawdata = fs.readFileSync('users.json');
    let users = JSON.parse(rawdata);
    res.status(200).json(users[req.params.username].favourites);
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;

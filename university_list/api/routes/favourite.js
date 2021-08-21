const router = require('express').Router();
const fs = require('fs');

router.post('/toggle', async (req, res) => {
  try {
    username = req.body.username;
    favourite = req.body.favourite;
    university = req.body.university;

    const rawdata = fs.readFileSync('users.json');
    const users = JSON.parse(rawdata);

    let favourites = users[username].favourites;

    if (favourite) {
      if (!favourites.includes(university)) {
        favourites.push(university);
      }
    } else {
      favourites = favourites.filter((u) => u !== university);
    }

    users[username].favourites = favourites;

    fs.writeFileSync('users.json', JSON.stringify(users));

    res.status(200).json();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:username', async (req, res) => {
  try {
    const rawdata = fs.readFileSync('users.json');
    const users = JSON.parse(rawdata);
    res.status(200).json(users[req.params.username].favourites);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

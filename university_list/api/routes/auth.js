const router = require("express").Router();
const fs = require('fs');

//REGISTER
router.post("/register", async (req, res) => {
  try {
    username = req.body.username;
    password = req.body.password;
    email = req.body.email;

    let rawdata = fs.readFileSync('users.json');
    let users = JSON.parse(rawdata);

    //create new user
    users[username] = {
      'username' : username,
      'password' : password,
      'email' : email,
      'favourites' : [],
    };
    
    fs.writeFileSync('users.json', JSON.stringify(users));
    res.status(200).json(users[username]);
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {

    let rawdata = fs.readFileSync('users.json');
    let users = JSON.parse(rawdata);
    console.log(`users ${users}`);

    const user = users[req.body.username];

    console.log(`user ${users[[req.body.username]]}`);

    if (!user) {
      res.status(404).json("user not found");
      return;
    }

    if(user.password === req.body.password) {
      res.status(200).json(user);
    } else {
      res.status(400).json("wrong password")
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
});

module.exports = router;

const router = require("express").Router();

let users = {};

//REGISTER
router.post("/register", async (req, res) => {
  try {
    username = req.body.username;
    password = req.body.password;

    //create new user
    users.username = {
      'username' : username,
      'password' : password
    };
    
    res.status(200).json();
  } catch (err) {
    res.status(500).json(err)
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const user = users[req.body.username];
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

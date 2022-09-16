const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');

// REGISTER

/* 
Made the callback function async because .save() is async function and hence without saving the new user in 
the collection it will run the next line. So to make the process synchronous we have used async and await.

We have put .save() inside try-catch block to cathc any error if occurs while saving the new user in the 
collection

201 status stands for Created.
*/
router.post('/register', async (req, res) => {
  try {
    if (!!!req.body.username) throw 'Username not entered';
    if (!!!req.body.email) throw 'Email not entered';
    if (!!!req.body.password) throw 'Password not entered';

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LOGIN

router.post('/login', async (req, res) => {
  try {
    if (!req.body.username) throw 'Username not entered';
    if (!req.body.password) throw 'Password not entered';

    // Check: User present or not
    const user = await User.findOne({ username: req.body.username });
    if (!user) throw 'Wrong Credentials!';

    // Check: Password match or not
    const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const password = hashedPassword.toString(CryptoJS.enc.Utf8);
    if (password !== req.body.password) throw 'Wrong Credentials!';

    res.status(200).json(user);
  } catch (err) {
    res.status(401).json(err);
  }
});

module.exports = router;

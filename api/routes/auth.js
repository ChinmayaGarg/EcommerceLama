const router = require('express').Router();
const User = require('../models/User');

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
      password: req.body.password,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

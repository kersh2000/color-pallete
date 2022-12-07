const express = require('express');
const User = require('../models/User');
const userRouter = express.Router();

userRouter.use(express.json());

userRouter.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({msg: 'Successfully obtained', users: users})
  } catch (error) {
    res.status(404).send(error.message);
  }
});

userRouter.post('/', async (req, res) => {
  try {
    const body = req.body;
    const user = await User.create({
      username: body.username,
      email: body.email,
      password: body.password
    });
    res.status(200).send({msg: 'Successfully created', username: user.username});
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = userRouter;
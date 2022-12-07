const express = require('express');
const { Palette, User } = require('../models')
const paletteRouter = express.Router();

paletteRouter.use(express.json());

paletteRouter.get('/', async (req, res) => {
  try {
    const palettes = await Palette.find();
    res.status(200).send({msg: 'Successfully obtained', palettes: palettes})
  } catch (error) {
    res.send(error.message);
  }
});

paletteRouter.post('/', async (req, res) => {
  try {
    const body = req.body;
    const user = User.findOne({
      _id: body.user_id
    });
    const palette = await Palette.create({
      user_id: body.user_id,
      title: body.title,
      category: body.category,
      colours: body.colours.split(", ")
    });
    res.status(200).send({msg: 'Successfully created', title: palette.title});
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = paletteRouter;
require('./db/connection');
const express = require('express');
const { paletteRouter, userRouter} = require('./routes');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/palette', paletteRouter);

app.get('/', async (req, res) => {
  res.status(200).send('Homepage.');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
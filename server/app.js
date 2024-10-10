const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
  res.status(200).send('Tutoring Scheduler');
})

app.listen(process.env.PORT, () => {
  console.log('Server is now running on PORT: ' + process.env.PORT);
})
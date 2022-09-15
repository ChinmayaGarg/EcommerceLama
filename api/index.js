const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Databse Connection Successfull');
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/api/test', () => {
  console.log('Test is successful');
});

app.use(express.json()); // Middleware integrated: This will allow accepting JSON object from client request

app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('Backend server is running. This callback function will run after starting the server');
});

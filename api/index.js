const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.5qikr1n.mongodb.net/shop?retryWrites=true&w=majority');

app.listen(5000, () => {
  console.log('Backend server is running. This callback function will run after starting the server');
});

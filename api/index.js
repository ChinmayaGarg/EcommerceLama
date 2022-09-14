const express = require('express');
const app = express();

app.listen(5000, () => {
  console.log('Backend server is running. This callback function will run after starting the server');
});

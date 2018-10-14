'use strict';

const express = require('express');

const { PORT = 3000, HOST = '0.0.0.0' } = process.env;
const server = express();

server.get('*', (req, res) => {
  res.send('Hello world!');
});

server.listen(PORT, HOST, error => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Listening at http://${HOST}:${PORT}`);
});

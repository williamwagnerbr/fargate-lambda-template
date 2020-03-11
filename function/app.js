const express = require('express');
const parser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(parser.json());

app.get('/health', (req, res) => {
  res.json({
    status: 'ok'
  });
});

app.get('/execute', (req, res) => {
  res.json('ok');
});

module.exports = app;
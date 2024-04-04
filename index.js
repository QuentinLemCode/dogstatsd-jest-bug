const ddtrace = require('dd-trace');
ddtrace.init();

const express = require('express');
const service = require('./service');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const response = service.call();
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

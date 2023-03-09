const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const buildDir = path.resolve(__dirname, 'build');

app.use(express.static(buildDir));

app.use(function (req, res) {
  res.sendFile(path.resolve(buildDir, 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});

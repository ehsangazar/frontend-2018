const express = require('express');

const app = express();
const compression = require('compression');
const fs = require('fs');

app.use(compression());

app.get('/api/survey_results', (req, res) => {
  const pathName = `${__dirname}/data/index.json`;

  // Not Found Scenario
  if (!fs.existsSync(pathName)) {
    res.status(404).end('');
  }

  // Found Scenario
  fs.readFile(`${__dirname}/data/index.json`, 'utf8', (err, data) => {
    res.status(200);
    setTimeout(() => {
      res.end(data);
    }, 5000);
  });
});


app.get('/api/survey_results/:fileId', (req, res) => {
  const pathName = `${__dirname}/data/survey_results/${req.params.fileId}`;

  // Not Found Scenario
  if (!fs.existsSync(pathName)) {
    res.status(404).end('');
  }

  // Found Scneario
  fs.readFile(pathName, 'utf8', (err, data) => {
    setTimeout(() => {
      res.status(200);
      res.end(data);
    }, 20000);
  });
});

app.listen(process.env.PORT || 3000);

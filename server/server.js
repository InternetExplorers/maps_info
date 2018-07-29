const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connection = require('../db/connection.js');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req,res) => {
  res.send(200);
})

app.get('/businesses/:business_id/business_info', (req, res) => {
  const businessId = Number(req.params.business_id);
  const queryStr = `SELECT * FROM business_info, more_business_info WHERE business_info.business_id = more_business_info.business_id AND business_info.business_id = ${businessId}`;
  connection.query(queryStr, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/businesses/:business_id/business_map', (req, res) => {
  const businessId = Number(req.params.business_id);
  const queryStr = `SELECT * FROM map WHERE business_id = ${businessId}`;
  connection.query(queryStr, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/businesses/:business_name', (req, res) => {
  const businessName = req.params.business_name;
  const queryStr = `SELECT id FROM businesses WHERE name = '${businessName}'`;
  connection.query(queryStr, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log('App listening to port 3001!');
});

module.exports = app;
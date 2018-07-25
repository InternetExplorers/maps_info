const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/businesses/:business_id/business_info', (req, res) => {
  const businessId = Number(req.params.business_id);
 
  res.send('BLAH')
});

app.listen(3001, () => {
  console.log('App listening to port 3001!');
});
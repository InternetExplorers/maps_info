const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'maps_info',
});

connection.connect(function(err) {
  if (err) {
    console.error ('error connecting: ' + err);
    return;
  } console.log ('Connected to MYSQL DB');
});

module.exports = connection;

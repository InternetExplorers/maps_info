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


// const mockAddress =  `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.country()}`;
// const queryStr = `INSERT INTO map (address, relative_location, phone_number, business_id) VALUES('${mockAddress}', '${mockAddress}', 12345, 2)`;
// connection.query(queryStr, (err, results) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('INSERT FUNCTION SUCCESS', results);
//   }
// });

const mockTime = function () {
  const openingTime = `${Math.floor(Math.random() * 6) + 6}:${Math.floor(Math.random() * 59)} am`;
  const closingTime = `${Math.floor(Math.random() * 11) + 1}:${Math.floor(Math.random() * 59)} pm`;
  return `${openingTime} - ${closingTime}`;
};


const queryStr = `INSERT INTO business_info (mon, tue, wed, thu, fri, sat, sun) VALUES('${mockTime()}', '${mockTime()}', '${mockTime()}', '${mockTime()}', '${mockTime()}', '${mockTime()}', '${mockTime()}')`;
connection.query(queryStr, (err, results) => {
  if (err) {
    throw err;
  }; 
});


module.exports = connection;
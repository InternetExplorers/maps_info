const faker = require('faker');
const connection = require('./connection.js');

const mockAddress = function () {
  var streetNum = [1,2,3,4,5,6,7,8,9,10];
  var streetName = ['Fillmore St', 'Grove St', 'Hayes St', 'Valencia St', 'Mission St', 'Brannan St'];
  return `${streetNum[Math.floor(Math.random() * 10)]} ${streetName[Math.floor(Math.random() * 6)]}, San Francisco, CA`;
};

const mockPhoneNum = function () {
  return faker.phone.phoneNumberFormat();
};

const mockTime = function () {
  const openingTime = `${Math.floor(Math.random() * 6) + 6}:${Math.floor(Math.random() * 60)} am`;
  const closingTime = `${Math.floor(Math.random() * 11) + 1}:${Math.floor(Math.random() * 60)} pm`;
  return `${openingTime} - ${closingTime}`;
};

const trueOrFalse = () => {
  return Math.floor(Math.random() < 0.5);
};

const mockLatitude = () => {
  //  get num between 19 and ~65 (including float)
  Math.floor((Math.random() * 46) + 19) + Number((Math.random()).toFixed(5));
}

const mockLongitude = () => {
  //  get num between ~ -161 to -68 (including float)
  return (Math.floor((Math.random() * 93) + 68) + Number((Math.random()).toFixed(5))) * (-1);
};

const insertMockTime = () => {
  for (let i = 1; i <= 100; i++) {
    const queryStr = `INSERT INTO business_info (mon, tue, wed, thu, fri, sat, sun, business_id) VALUES('${mockTime()}', '${mockTime()}', '${mockTime()}', '${mockTime()}', '${mockTime()}', '${mockTime()}', '${mockTime()}', ${i})`;
    connection.query(queryStr, (err, results) => {
      if (err) {
        throw err;
      }
    });
  }
};

const insertMockAddress = () => {
  for (let i = 1; i <= 100; i++) {
    const queryStr = `INSERT INTO map (address, relative_location, phone_number, business_id) VALUES('${mockAddress()}', '${mockAddress()}', '${mockPhoneNum()}', ${i})`;
    connection.query(queryStr, (err, results) => {
      if (err) {
        throw err;
      }
    });  
  }
};

const insertMockBusinessHrs = () => {
  for (let i = 1; i <= 100; i++) {
    const queryStr = `INSERT INTO more_business_info (take_reservations, delivery, take_out, accepts_credit_cards, accepts_google_pay, bike_parking, wheelchair_accessible, good_for_kids, good_for_groups, wi_fi, has_tv, waiter_service, caters, gender_neutral_restrooms, business_id) VALUES('${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', '${trueOrFalse()}', ${i})`;
    connection.query(queryStr, (err, results) => {
      if (err) {
        throw err;
      }
    }); 
  }
};

insertMockTime();
insertMockAddress();
insertMockBusinessHrs();
module.exports = mockAddress;

const faker = require('faker');
const connection = require('./connection.js');

const mockAddress = function() {
  var streetNum = [0,1,2,3,4,5,6,7,8,9];
  var streetName = ['fillmore st', 'grove st', 'hayes st', 'valencia st', 'mission st', 'brannan st', 'geary st', 'market st', 'folsom st', '1st st'];
  var randomAddress = `${streetNum(Math.floor(Math.random() * 11))}, ${streetName(Math.floor(math.random() * 11))}, San Francisco, CA`;
  return randomAddress;
};

const mockPhoneNum = function() {
  return faker.phoneNumber();
};

const mockTime = function () {
  const openingTime = `${Math.floor(Math.random() * 6) + 6}:${Math.floor(Math.random() * 60)} am`;
  const closingTime = `${Math.floor(Math.random() * 11) + 1}:${Math.floor(Math.random() * 60)} pm`;
  return `${openingTime} - ${closingTime}`;
};

const yesOrNo = () => {
  const boolean = Math.floor((Math.random() + 1) + 1);
  if (boolean === 0) {
    return 'yes';
  } return 'no';
};

const mockLatitude = () => {
  //  get num between 19 and ~65 (including float)
  Math.floor((Math.random() * 46) + 19) + Number((Math.random()).toFixed(5));
}

const mockLongitude = () => {
  //  get num between ~ -161 to -68 (including float)
  return (Math.floor((Math.random() * 93) + 68) + Number((Math.random()).toFixed(5))) * (-1);
};

module.exports = mockAddress;

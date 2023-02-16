//IMPORTS //////
const fs = require('fs');

// MAIN THREAD ///////
// const url = 'https://example.edu';
// const savePath = './index.html';

// Import arguments from command line.
const url = process.argv[2];
const savePath = process.argv[3];

//Create connection with url
const request = require('request');
request(`${url}`, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode);
  if (error) {
    console.log('Invalid URL \n error: ', error);
    process.exit();
  }
  storeData(body);
});

// Store data with callback
const storeData = (data) => {

  fs.writeFile(`${savePath}`, data, err => {
    if (err) {
      console.error(err);
      process.exit();
    }
    console.log('File saved, check it out.');
  });
};
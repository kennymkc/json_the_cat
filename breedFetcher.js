const request = require('request');

const fetchBreedDescription = function(catBreed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    try {
      const data = JSON.parse(body);
      callback(null, data[0]['description']);
    } catch (err) {
      callback('Cat breed not found, please check spelling.', null);
    }
  });
};

module.exports = { fetchBreedDescription };
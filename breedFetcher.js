const request = require('request');
let catBreed = process.argv[2];


request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  if (error) {
    return console.log('Request failed, please check correct URL.');
  }
  try {
    const data = JSON.parse(body);
    console.log(data[0]['description']);
  } catch (err) {
    console.log('Cat breed not found, please check spelling.');
  }
});
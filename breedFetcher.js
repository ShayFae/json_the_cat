const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/', (error, response, body) => {
    if(error) {
      return callback(`${error}`, null)
    }
    const data = JSON.parse(body);

    for(let i = 0; i < data.length; i++) {
      if(data[i].name === breedName) {
        return callback(null, `${data[i].description}`)
      }
      }
    return callback(`Requested ${breedName} was not found`, null);
  });
};

module.exports = { fetchBreedDescription };
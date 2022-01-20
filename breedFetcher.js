const fs = require('fs');
const readline = require('readline');
const request = require('request');
    // return breed.description;

// rl.question("testing", (answer) => { 
// });
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  const data = JSON.parse(body);
    // console.log(data[0].description)
  // console.log(typeof data);
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', typeof body); // Print the HTML for the Google homepage.
});

const findBreed = function(breed) {
  request('https://api.thecatapi.com/v1/breeds/', (error, response, body) => {
    // if(request === undefined) {
  // console.log('error:', error); // Print the error if one occurred
    // }
  const data = JSON.parse(body);
  for(let i = 0; i < data.length; i++) {
    if(error) {
      return error
    }
    // console.log(data[i].name)
    if(data[i].name === breed) {
      console.log(data[i].description)
      return data[i].description
    }
  }
         console.log('Requested breed is not found');
         return 'Requested breed is not found';
});

}

findBreed('Shiba');
findBreed('Siberian')
findBreed('Chartreux')
findBreed('Yorkie')

// const test = process.argv.slice(2).toString();

// fs.writeFile('w2\d4-api\json_the_cat\catch.txt', content, err => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   //file written successfully
// })
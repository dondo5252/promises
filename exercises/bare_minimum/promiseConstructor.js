/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('needle');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {

  return new Promise ((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        reject(err)
      } else {
        const lines = content.split(/\r?\n/);
        resolve(lines[0])
      }
    })
  })
  // const getFirstLine = () => {
  //   return new Promise((resolve, reject) => {
  //     //async here
  //     fs.readFile(filePath, 'utf8', (err, context) => {
  //     if (err) {
  //       reject(err)
  //     } else {
  //       const lines = context.split(/\r?\n/);
  //       // console.log('linnnnnnesss', lines[0])
  //       resolve(lines[0])
  //     }
  //     })
  //   })
  // }

  // const firstLine = getFirstLine();
  // // console.log('logg', firstLine)

  // return firstLine
  //   .then(val => val)
  //   .catch((err) => {
  //     handle(err)
    // })

  // return new promise instance
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO

  return new Promise  ((resolve, reject) => {
    request.get(url, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res.statusCode)
      }
    })
  })
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};

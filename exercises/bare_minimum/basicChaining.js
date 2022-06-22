/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var git = require('./promisification')
var readFile = require('./promiseConstructor')


var writeFile = Promise.promisify(fs.writeFile)

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // use fs.readFile
  // use first func in promisification to send a request to github
  // use fs.writeFile


  return readFile.pluckFirstLineFromFileAsync(readFilePath)
    .then(user => { return git.getGitHubProfileAsync(user)})
    .then(gitHubProfile => {
       return writeFile(writeFilePath, JSON.stringify(gitHubProfile))
    })
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};

let readlineSync = require('readline-sync');
let fs = require('fs');

function append() {
  let word = readlineSync.question('What do you want to add to the array? ');
  console.log('Appending ' + `${word}` + ' to the TODO list');
  fs.appendFileSync('./todos.txt', word, (err) => { // source: https://www.geeksforgeeks.org/javascript-program-to-write-data-in-a-text-file/
    // In case of a error throw err.
    if (err) throw err;
  });
  return word;
}

module.exports = append;

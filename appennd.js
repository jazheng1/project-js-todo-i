let process = require('process');

function append(array) {
  let word = process.argv[2];
  console.log('Appending ' + `${word}` + 'to the TODO list');
  array.push(word);
  return array;
}

module.exports = append;

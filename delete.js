let readlineSync = require('readline-sync');
let fs = require('fs');

function remove(array) {
  let word = readlineSync.question('What do you want to remove to the array? ');
  console.log(`Deleting '${word}' from the TODO list`);
  let newValue = './todos.txt'.replace(word, '');
  fs.writeFileSync('./todos.txt', newValue, 'utf-8');
  return array;
}

module.exports = remove;

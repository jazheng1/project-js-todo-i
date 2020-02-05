let process = require('process');

function remove(array) {
  let deleteToDo = process.argv[2];
  let possibleWord = '';
  console.log('deleting ' + deleteToDo + ' from the TODO list');
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      possibleWord = possibleWord + array[i].charAt(j);
      if (possibleWord === deleteToDo) {
        array.splice(i, 1);
      }
    }
  }
  return array;
}

module.exports = remove;

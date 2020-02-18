let fs = require('fs');

function readList(array) {
  let taskString = '';
  for (let i = 0; i < array.length; i++) {
    taskString += (`${i + 1}. [ ] ${array[i]}`);
  }
  fs.writeFileSync('todos.txt', taskString);
  return array;
}

module.exports = readList;

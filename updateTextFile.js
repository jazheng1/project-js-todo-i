let fs = require('fs');

function updateTextFile(list) {
  let taskString = '';
  for (let task of list) {
    taskString += task + '\n';
  }
  fs.writeFileSync('./todos.txt', taskString);
}

module.exports = updateTextFile;

let fs = require('fs');
// reads the inputed list file

function readList() {
  let text = fs.readFileSync('./todos.txt', 'utf-8').split('\n');
  return text;
}

module.exports = readList;

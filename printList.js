let fs = require('fs');

function printList(array) {
  let text = fs.readFileSync('./todos.txt', 'utf-8');
  console.log(text);
}

module.exports = printList;

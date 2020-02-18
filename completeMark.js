let fs = require('fs');

function markComplete(text, taskNumber) {
  console.log(text);
  let newArray = [];
  for (let i = 0; i < text.length - 1; i++) { // did -1 to get rid of a new line that would otherwise be printed
    if (i === taskNumber - 1) {
      newArray = (`${taskNumber}. [X] ${text[i]}`);
    } else {
      newArray += (`${i + 1}. [ ] ${text[i]}`);
    }
  }
  fs.writeFileSync('todos.txt', newArray);
  return newArray;
}

module.exports = markComplete;

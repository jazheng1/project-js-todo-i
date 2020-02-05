let fs = require('fs');
let process = require('process');

// reads the inputed list file

function readList() {
  let list = process.argv[2];
  let text = fs.readFileSync(list, 'utf-8').split('\n');
  for (let i = 0; i < text.length - 1; i++) {
    console.log(`${i + 1} . ${text[i]}`);
  }
  return text;
}

readList();

module.exports = readList;

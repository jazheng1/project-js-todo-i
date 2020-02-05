let fs = require('fs');
let process = require('process');

// reads the inputed list file

function readList() {
  let list = process.argv[2];
  let text = fs.readFileSync(`${list}`, 'utf-8');
  return text;
}

let test = readList();
console.log(test);

module.exports = readList;

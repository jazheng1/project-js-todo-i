let readList = require('./listReader.js');
let append = require('./appennd.js');
let remove = require('./delete.js');
let process = require('process');
let fs = require('fs');
let command = process.argv[2];

function todo() {
  if (command === 'list') {
    for (let i = 0; i < readList().length - 1; i++) {
      console.log(`${i + 1}. [ ] ${readList()[i]}`);
    }
  }

  if (command === 'add') {
    let counter = 0;
    for (let i = 0; i < readList().length; i++) {
      counter++;
    }
    readList().push(`${counter}. [ ] ${append(readList())}`);
  }

  if (command === 'delete') {
    remove(readList());
  }
}

todo();
